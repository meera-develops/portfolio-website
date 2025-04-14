import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import mb from '../assets/img/logo-mb.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './navbar.css';

//add home button to navbar

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
            <AppBar position="static" width="100%" sx={{ backgroundColor: 'transparent', marginTop: '3%'}}>
                <Toolbar>
                    <Link to="/" sx={{display: {xs: 'none', sm: 'none', md:'flex'}}} aria-label='logo'>
                        <img
                        src={mb}
                        alt="pink circle logo with letters MB on it"
                        style={{ width: 60, height: 60, marginRight: 10,}}
                        className='logo'
                        />
                    </Link>
                    <Box sx={{display:{xs:'none', md:'flex', gap: 1}, justifyContent: 'flex-end', width: '100%'}}>
                            <Button
                                component="a"
                                href="https://www.linkedin.com/in/meera-bhola/"
                                target="_blank"
                                rel="noopener"
                                color="inherit"
                                sx={{ display: 'flex', 
                                    alignItems: 'center ',
                                    transition: 'all 0.3s ease', 
                                    '&:hover': {
                                    transform: 'scale(1.2)',
                                    },
                                }}

                                >
                               <LinkedInIcon fontSize="large"/> 
                            </Button>

                            <Button
                                component="a"
                                href="https://github.com/meera-develops"
                                target="_blank"
                                color="inherit"
                                rel="noopener"
                                sx={{ display: 'flex', 
                                    alignItems: 'center',
                                    transition: 'all 0.3s ease', 
                                    '&:hover': {
                                    transform: 'scale(1.2)',
                                    },
                                }}
                                >
                                <GitHubIcon fontSize="large"/>
                            </Button>
                        {pages.map((page, index)=>(
                            <Button 
                            className={
                                index === pages.length - 1 ? 'last-page' 
                                : index === pages.length - 2 ?
                                'second-last-page' : 'my-links'
                            }
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
                                <MenuItem 
                                key={page}
                                sx={{
                                    color: 'black',
                                    fontWeight: 'bold'
                                }}
                                component={Link} to={`/${page.toLowerCase()}`}>{page}</MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, display:{xs:'flex', md:'none'}, fontWeight: 'bold' }}>
                        Meera's Portfolio
                    </Typography>
                </Toolbar>

            </AppBar>
        
        </>
    )
}

export default Navbar 