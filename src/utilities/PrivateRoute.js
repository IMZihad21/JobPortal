import React from 'react'
import { Navigate } from 'react-router-dom';
import useProvider from '../hooks/useProvider';

const PrivateRoute = ({ children }) => {
    const { user } = useProvider();
    return user ? children : <Navigate to="/authentication" />;
}

export default PrivateRoute
