import React, { createContext, useState, useEffect, useCallback } from 'react';

const axios = require('axios');
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [sections, setSections] = useState([]);
  const [menuGridItems, setMenuGridItems] = useState([])
  const [allItems, setAllItems] = useState([])

  const setMenuSections = async () => {
    const { data } = await axios.get(`/api/menu`);
    const refs = data.options.map(section => section._ref);
    const items = await axios.get(`/api/sections`);
    const categories = items.data.filter(item => {
      return refs.includes(item._id);
    });
    const fullMenu = await axios.get('api/items')
    setSections([...categories]);
    setMenuGridItems([...categories])
    setAllItems([fullMenu.data])
    console.log(fullMenu.data)
  };

  const fetchData = useCallback(async () => {
    setMenuSections();
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <AppContext.Provider value={{ sections, menuGridItems, setMenuGridItems, allItems, setAllItems }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
