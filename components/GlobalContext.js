import React, { createContext, useState } from "react";
export const GlobalStateContext = createContext();
export const GlobalStateProvider = ({ children }) => {
  const [link, setLink] = useState("");

  return (
    <GlobalStateContext.Provider value={{ link, setLink }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
