import React, { createContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedSubMenu, setSelectedSubMenu] = useState(null);

  return (
    <GlobalContext.Provider value={{ selectedMenu, setSelectedMenu, selectedSubMenu, setSelectedSubMenu }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
