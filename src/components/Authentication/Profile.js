import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useProvider from '../../hooks/useProvider';

const Profile = () => {
    const { user, handleSignOut } = useProvider();
    return (
        <Card sx={{ width: "100%", mt: "30%", textAlign: "center" }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    User Profile
                </Typography>
                <Typography variant="h5" component="div">
                    {user?.full_name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {user?.email}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    onClick={handleSignOut}
                >
                    Sign Out
                </Button>
            </CardActions>
        </Card>
    )
}

export default Profile
