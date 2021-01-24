import React, { createContext, useState } from 'react';

export const ActiveDocumentsContext = createContext();

export const ActiveDocumentsProvider = (props) => {

    const [activeDocuments, setActiveDocuments] = useState([]);

    return (
        <ActiveDocumentsContext.Provider value={[activeDocuments, setActiveDocuments]}>{props.children}</ActiveDocumentsContext.Provider>
    );
}

// export default DocumentsProvider;