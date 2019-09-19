import React, { createContext, useState, useEffect, useCallback } from 'react';
import gridHelper from '../helpers/gridHelper';

const axios = require('axios');
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [sections, setSections] = useState([]);
  const [menuGridItems, setMenuGridItems] = useState([]);
  const [allItems, setAllItems] = useState([]);

  const setMenuSections = async () => {
    const { data } = await axios.get(`/api/menu`);
    const refs = data.options.map(section => section._ref);
    const items = await axios.get(`/api/sections`);
    const categories = items.data.filter(item => {
      return refs.includes(item._id);
    });
    const fullMenu = await axios.get('api/items');
    setSections([...categories]);
    setAllItems([fullMenu.data]);
    if (window.location.pathname === '/') {
      setMenuGridItems([...categories]);
    } else {
      const gridContents = [...categories].map(section => {
        return {
          gridItems: section.options.map(option => option._ref)
        };
      });
      const currentSelection = [...fullMenu.data.flat()].filter(item => {
        return gridContents[gridHelper(window.location.pathname)].gridItems.includes(item._id);
      });
      setMenuGridItems([...currentSelection]);
    }
  };

  const fetchData = useCallback(() => {
    setMenuSections();
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <AppContext.Provider
      value={{
        sections,
        menuGridItems,
        setMenuGridItems,
        allItems,
        setAllItems
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
