import React, {useState, MouseEvent} from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import mb from '../assets/img/logo-mb.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './navbar.css';

const pages=['Projects', 'About', 'Resume', 'Contact'];

function Navbar() {
    const [anchorNav, setAnchorNav] = useState(null);

    const openMenu = (event) =>{
        setAnchorNav(event.currentTarget);
    };
    const closeMenu =() =>{
        setAnchorNav(null);
    };
    return (
        <>
            <AppBar position="static" width="100%" sx={{ backgroundColor: 'transparent'}}>
                <Toolbar>
                    <Link to="/" sx={{display: {xs: 'none', md:'flex'}}} aria-label='logo'>
                        <img
                        src={mb}
                        alt="pink circle logo with letters MB on it"
                        style={{ width: 125, height: 125}}
                        />
                    </Link>
                    <Box sx={{display:{xs:'none', md:'flex', gap: 1}, justifyContent: 'flex-end', width: '100%'}}>
                            <Button
                                component="a"
                                href="https://www.linkedin.com/in/meera-bhola/"
                                target="_blank"
                                color="inherit"
                                sx={{ display: 'flex', alignItems: 'center '}}

                                >
                               <LinkedInIcon fontSize="large"/> 
                            </Button>
                            <Button
                                component="a"
                                href="https://github.com/meera-develops"
                                target="_blank"
                                color="inherit"
                                sx={{ display: 'flex', alignItems: 'center' }}
                                >
                                <GitHubIcon fontSize="large"/>
                            </Button>
                        {pages.map((page)=>(
                            <Button 
                            color='inherit' 
                            className="my-links" 
                            key={page} 
                            sx={{
                                transition: 'all 0.3s ease', // Smooth transition for hover effect
                                '&:hover': {
                                textShadow: '0 0 40px rgba(185, 114, 187, 1), 0 0 50px rgba(185, 114, 187, 1)', // Glow effect on hover
                                transform: 'scale(1.1)',
                                },
                            }}
                            component={Link} to={`/${page.toLowerCase()}`}>{page}</Button>
                        ))}
                    </Box>

                    <Box sx={{display:{xs:'flex', md:'none'}}}>
                        <IconButton size='large' edge='start' color='inherit' onClick={openMenu}>
                            <MenuIcon />
                        </IconButton>
                        <Menu anchorEl={anchorNav} open={Boolean(anchorNav)} onClick={closeMenu} sx={{display:{xs:'flex', md:'none'}}}>
                            {pages.map((page)=>(
                                <MenuItem key={page}>{page}</MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography variant="h1" component="div" sx={{ flexGrow: 1, display:{xs:'flex', md:'none'} }}>
                        Hiii
                    </Typography>
                </Toolbar>

            </AppBar>
        
        </>
    )
}

export default Navbar 