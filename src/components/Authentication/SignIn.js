import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import useProvider from '../../hooks/useProvider';

const SignIn = () => {
    const { handleSignIn, loading } = useProvider();
    const [ error, setError ] = React.useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        if (email === '' || password === '') {
            setError('Must fill all the fields before sign in.');
            return;
        }
        handleSignIn(email, password)
            .catch(err => {
                if (err.response.status === 401) {
                    setError(err.response.data.detail);
                };
            })
    };

    return (
        <Box
            sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                {
                    error && <Typography
                        color="error"
                        sx={{ textAlign: "center" }}
                    >
                        {error}
                    </Typography>
                }
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={loading}
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
            </Box>
        </Box>
    )
}

export default SignIn
