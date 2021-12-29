import React from 'react';
import useAuth from '../hooks/useAuth';

export const ContextData = React.createContext();

const ContextProvider = ({ children }) => {
    const allContext = { ...useAuth() };
    return (
        <ContextData.Provider value={allContext}>
            {children}
        </ContextData.Provider>
    );
};

export default ContextProvider; 
