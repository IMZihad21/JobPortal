import React from 'react'

const useAuth = () => {
    const [ user, setUser ] = React.useState(null);

    const handleSignIn = (email, password) => {
        //
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
