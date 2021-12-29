import React from 'react';
import axios from 'axios';

const useAuth = () => {
    const [ user, setUser ] = React.useState(null);

    const handleSignIn = (email, password) => {
        const baseURL = 'https://tf-practical.herokuapp.com/api/login/';
        const payload = {
            email,
            password
        };
        return axios.post(baseURL, payload)
            .then((result) => {
                setUser(result.data)
            });
    };

    const handleSignUp = (name, phone, birthday, gender, email, password) => {
        //
    };

    return {
        user,
        handleSignIn,
        handleSignUp
    }
}

export default useAuth
