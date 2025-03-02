import React, {useState, MouseEvent} from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Button, Menu, MenuList, MenuItem } from '@mui/material';
import { AccessAlarm } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import mb from '../assets/img/logo-mb.png';

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
            <AppBar position="static" width="100%">
                <Toolbar>
                    {/* <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{display:{xs:'none', md:'flex'}}} component={Link} to='/'>
                            <AccessAlarm />
                    </IconButton> */}
                    <Link to="/" sx={{display: {xs: 'none', md:'flex'}}}>
                        <img
                        src={mb}
                        alt="pink circle logo with letters MB on it"
                        style={{ width: 100, height: 100}}
                        />
                    </Link>
                    <Typography variant="h1" component="div" sx={{ flexGrow: 1, display:{xs:'none', md:'flex'} }}>
                        Hiii
                    </Typography>
                    <Box sx={{display:{xs:'none', md:'flex'}}}>
                        {pages.map((page)=>(
                            <Button color='inherit' key={page} component={Link} to={`/${page.toLowerCase()}`}>{page}</Button>
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
                    <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{display:{xs:'flex', md:'none'}}}>
                            <AccessAlarm />
                    </IconButton>
                    <Typography variant="h1" component="div" sx={{ flexGrow: 1, display:{xs:'flex', md:'none'} }}>
                        Hiii
                    </Typography>
                </Toolbar>

            </AppBar>
        
        </>
    )
}

export default Navbar 