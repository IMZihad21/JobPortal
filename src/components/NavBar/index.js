import React from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '../../images/NavIcons/Home.png';
import JobsIcon from '../../images/NavIcons/Jobs.png';
import ConnectionIcon from '../../images/NavIcons/Connections.png';
import MailsIcon from '../../images/NavIcons/Mails.png';
import { Link } from 'react-router-dom';

const navLinks = [
    { name: 'Home', link: '/', icon: HomeIcon },
    { name: 'Jobs', link: '/jobs', icon: JobsIcon },
    { name: 'Connections', link: '/connections', icon: ConnectionIcon },
    { name: 'Inbox', link: '/inbox', icon: MailsIcon }
];

const NavBar = () => {
    return (
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
                        <ListItem
                            component={Link}
                            to={links.link}
                            alignItems='center'
                            divider
                            button
                            key={`navlinks-${index}`}>
                            <img src={links.icon} alt={links.name} />
                        </ListItem>

                    ))}
                </List>
            </Box>
        </Drawer>
    )
}

export default NavBar
