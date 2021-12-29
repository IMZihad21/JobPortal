import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function Authentication() {

    return (
        <Grid container component="main" sx={{ height: '600px' }}>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <SignUp />
            </Grid>
            <Grid item xs={false} sm={4} md={7}>
                <Box sx={{ textAlign: 'left', mt: "100px", mx: "200px" }}>
                    <Typography variant="h4" color="primary.main">
                        Tech
                    </Typography>
                    <Typography variant="h2" color="secondary.main" sx={{ fontWeight: "500" }}>
                        Foring
                    </Typography>
                    <Typography variant="subtitle2" color="primary.main">
                        Shaping tomorrow's Cyber Security
                    </Typography>
                </Box>
                <Box sx={{ textAlign: "center", mt: "50px", mx: "50px" }}>
                    <Typography variant="h4" color="primary.main">
                        Welcome to TechForing
                    </Typography>
                    <Typography variant="h6" color="secondary.main">
                        Notice:
                    </Typography>
                    <Typography variant="h6" color="primary.main">
                        An Applicant can only register once.
                    </Typography>
                    <Typography variant="subtitle1" color="primary.main">
                        Registered users, please login with your credentials by entering your email and password.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}