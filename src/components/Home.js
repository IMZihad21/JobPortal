import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import BrandLogo from '../images/BrandLogo.png';
import HomeIcon from '../images/NavIcons/Home.png';
import JobsIcon from '../images/NavIcons/Jobs.png';
import ConnectionIcon from '../images/NavIcons/Connections.png';
import MailsIcon from '../images/NavIcons/Mails.png';

const navLinks = [
    { name: 'Home', link: '/', icon: HomeIcon },
    { name: 'Jobs', link: '/jobs', icon: JobsIcon },
    { name: 'Connections', link: '/connections', icon: ConnectionIcon },
    { name: 'Inbox', link: '/inbox', icon: MailsIcon }
];

function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function Home(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Box sx={{ height: "100%", mr: "5px" }}>
                        <img height="100%" src={BrandLogo} alt="TechForing Logo" srcset="" />
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
            <Toolbar id="back-to-top-anchor" />

            <Drawer
                variant="permanent"
                sx={{
                    width: "70px",
                    flexShrink: 0,
                    [ `& .MuiDrawer-paper` ]: { width: "70px", boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {navLinks.map((links, index) => (
                            <ListItem alignItems='center' divider button key={`navlinks-${index}`}>
                                <img src={links.icon} alt={links.name} />
                            </ListItem>

                        ))}
                    </List>
                </Box>
            </Drawer>
            <Container>
                <Typography align="center" variant="h4" component="h1" gutterBottom>
                    Welcome to the React Material-UI
                </Typography>
            </Container>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}
