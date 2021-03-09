import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {

    const [data, setData] = useState(() => getLocalStorage("data"));
    useEffect(() => {
        getLocalStorage("data");
      }, []);

    return (
        <DataContext.Provider value={[data, setData]}>{props.children}</DataContext.Provider>
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