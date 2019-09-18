import React, { createContext, useState, useEffect, useCallback } from "react";

const axios = require("axios");
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
const [sections, setSections] = useState([])

  const fetchSections = async () => {
    let  { data }  = await axios.get(`api/sections`);
    console.log(data)
    setSections([...data]);
  };

  const mountEffect = useCallback(fetchSections, []);

  useEffect(() => {
    mountEffect()
  }, [mountEffect]);

  return (
    <AppContext.Provider value={{ sections, setSections }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };