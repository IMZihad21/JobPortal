import React, { createContext } from 'react';

export const ContextData = createContext();

const ContextProvider = ({ children }) => {
    const allContext = "Context is working";
    return (
        <ContextData.Provider value={allContext}>
            {children}
        </ContextData.Provider>
    );
};

export default ContextProvider; 
