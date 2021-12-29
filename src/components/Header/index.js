import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import BrandLogo from '../../images/BrandLogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Box
                    component={Link}
                    to="/"
                    sx={{ height: "100%", mr: "5px" }}
                >
                    <img height="100%" src={BrandLogo} alt="TechForing Logo" />
                </Box>
                <Box>
                    <Typography variant="h6" component="div">
                        TechForing
                    </Typography>
                    <Typography variant="subtitle2" component="div">
                        Shaping Tomorrow's Cybersecurity
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        component={Link}
                        to="/authentication"
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        // onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
