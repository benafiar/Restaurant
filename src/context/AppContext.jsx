import React, { createContext, useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { gridHelper } from '../helpers';
import axios from 'axios';

const AppContext = createContext();

const AppContextProvider = withRouter(({ location, children }) => {
  const [sections, setSections] = useState([]);
  const [menuGridItems, setMenuGridItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchData = useCallback(async () => {
    const requests = [
      axios.get('/api/menu'),
      axios.get('/api/sections'),
      axios.get('/api/items')
    ];
    const [
      { data: menuData = {} },
      { data: sectionData = [] },
      { data: fullMenuData = [] }
    ] = await Promise.all(requests);
    const refs = menuData.options.map(section => section._ref);
    const categories = sectionData.filter(item => refs.includes(item._id));
    setSections(categories);
    setAllItems(fullMenuData);
    setLoaded(true);
  }, []);

  const setMenuSections = useCallback(() => {
    if (location.pathname === '/') return setMenuGridItems(sections);
    const gridContents = sections.map(section => ({
      gridItems: section.options.map(option => option._ref)
    }));
    const currentSelection = allItems.filter(item =>
      gridContents[gridHelper(location.pathname)].gridItems.includes(item._id)
    );
    setMenuGridItems([...currentSelection]);
  }, [allItems, location.pathname, sections]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    loaded && setMenuSections();
  }, [loaded, location.pathname, setMenuSections]);

  return (
    <AppContext.Provider
      value={{
        sections,
        menuGridItems,
        setMenuGridItems,
        allItems,
        loaded
      }}
    >
      {children}
    </AppContext.Provider>
  );
});

export { AppContext, AppContextProvider };
