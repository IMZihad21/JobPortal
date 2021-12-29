import React from 'react';
import axios from 'axios';

const useAuth = () => {
    const [ user, setUser ] = React.useState(null);
    const [ token, setToken ] = React.useState(null);
    const [ loading, setLoading ] = React.useState(false);

    const handleSignIn = (email, password) => {
        setLoading(true);
        const baseURL = 'https://tf-practical.herokuapp.com/api/login/';
        const payload = {
            email,
            password
        };
        return axios.post(baseURL, payload)
            .then((result) => {
                setUser(result.data.user);
                setToken(result.data.access);
                setLoading(false);
            });
    };

    const handleSignUp = (name, phone, birthday, gender, email, password) => {
        //
    };

    const handleSignOut = () => {
        setUser(null);
        setToken(null);
    };

    return {
        user,
        token,
        loading,
        handleSignIn,
        handleSignUp,
        handleSignOut
    }
}

export default useAuth
