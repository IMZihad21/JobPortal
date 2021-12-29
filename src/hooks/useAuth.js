import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    const [ user, setUser ] = React.useState(null);
    const [ token, setToken ] = React.useState(null);
    const [ loading, setLoading ] = React.useState(false);
    const [ error, setError ] = React.useState('');
    const navigate = useNavigate();

    const handleSignIn = (email, password) => {
        setError('');
        if (email === '' || password === '') {
            setError('Must fill all the fields before sign in.');
            return;
        }
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
                navigate("/jobs");
            })
            .catch(err => {
                if (err.response.status === 401) {
                    setError(err.response.data.detail);
                };
            });
    };

    const handleSignUp = (full_name, phone_number, birthDate, gender, email, password, confirmPassword) => {
        setError('');
        setLoading(true);
        if (email === '' || password === '' || full_name === '' || phone_number === '') {
            setError('Must fill all the fields before sign in.');
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        if (password.length < 8) {
            setError("Password is too short. Minimum 8 characters.");
            return;
        }
        const baseURL = "https://tf-practical.herokuapp.com/api/register/";
        const payload = {
            "full_name": full_name,
            "email": email,
            "birthDate": birthDate,
            "gender": gender,
            "phone_number": phone_number,
            "password": password
        };

        axios.post(baseURL, payload)
            .then((result) => {
                handleSignIn(email, password);
            })
            .catch(err => {
                console.log(err.response);
                if (err.response.status === 400) {
                    setError("Provide valid info to sign up!");
                    setLoading(false);
                };
            });
    };

    const handleSignOut = () => {
        setUser(null);
        setToken(null);
    };

    return {
        user,
        token,
        loading,
        error,
        handleSignIn,
        handleSignUp,
        handleSignOut
    }
}

export default useAuth
