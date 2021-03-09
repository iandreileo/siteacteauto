import React, { createContext, useEffect, useState } from 'react';

export const ActiveDocumentsContext = createContext();

export const ActiveDocumentsProvider = (props) => {

    const [activeDocuments, setActiveDocuments] = useState(() => getLocalStorage("activeDocuments"));
    useEffect(() => {
        getLocalStorage("activeDocuments");
      }, []);

    return (
        <ActiveDocumentsContext.Provider value={[activeDocuments, setActiveDocuments]}>{props.children}</ActiveDocumentsContext.Provider>
    );
}

function getLocalStorage(key) {
    try {
      const value = sessionStorage.getItem(key);
      console.log(JSON.parse(value));
      return value ? JSON.parse(value) : [];
    } catch (e) {
      // if error, return initial value
      return [];
    }
  }

// export default DocumentsProvider;