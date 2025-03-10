import './home.css';
import { Container, Typography, ThemeProvider, Box } from '@mui/material';
import { Grid2 } from '@mui/material';
import theme from '../../theme';
import headshot from '../../assets/img/Headshotfx.png';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

function Home() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container>

                    <Grid2 container rowSpacing={1} columnSpacing={{xs: 1, md: 6}} justifyContent="space-between" alignItems="flex-end">

                        <Grid2 item xs={12} md={6} lg={6}>
                            <Typography variant="h1" component="h1" gutterBottom className="overlay">
                                Meera Bhola
                            </Typography>
                            <Typography variant="h2" style={{ fontFamily: 'Tomorrow Medium'}} className="overlay2">
                                Web Designer
                            </Typography>
                            <Typography variant="h2" style={{ fontFamily: 'Tomorrow Medium'}} gutterBottom className="overlay2">
                                Front-end Developer
                            </Typography>
                            <Typography variant="body2">
                                Passionate web developer crafting responsive, <br />user-centered websites leveraging modern technologies
                            </Typography>
                        </Grid2>

                        <Grid2 item xs={12} md={6} lg={6}>
                            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                <img src={headshot} alt="Headshot of Meera Bhola" className="headshot"></img>
                            </Box>
                        </Grid2>

                    </Grid2>

                    <Box sx={{ mt: 12 }}>

                        <Grid2 container spacing={2} justifyContent="space-between">

                            <Grid2 item xs={12} md={3} display="flex" justifyContent="center"  className="mouse-icons">
                                <MouseOutlinedIcon sx={{ color: '#AEA5D4', fontSize: '80px', filter: 'drop-shadow(4px 2px 6px rgba(185, 114, 187, 1))' }} />
                            </Grid2>

                            <Grid2 item xs={12} md={3} display="flex" justifyContent="center" className="keyboard-icons">
                                <KeyboardAltOutlinedIcon sx={{ color: '#AEA5D4',fontSize: '80px', filter: 'drop-shadow(4px 2px 6px rgba(185, 114, 187, 1))'}} />
                            </Grid2>

                            <Grid2 item xs={12} md={3} display="flex" justifyContent="center" className="screen-icons">
                                <DesktopWindowsOutlinedIcon sx={{ color: '#AEA5D4', fontSize: '80px', filter: 'drop-shadow(4px 2px 6px rgba(185, 114, 187, 1))'}} />
                            </Grid2>

                            <Grid2 item xs={12} md={3} display="flex" justifyContent="center" className="web-icons">
                                <LanguageOutlinedIcon sx={{ color: '#AEA5D4', fontSize: '80px', filter: 'drop-shadow(4px 2px 6px rgba(185, 114, 187, 1))'}} />
                            </Grid2>

                        </Grid2>

                    </Box>

                
                </Container>
            </ThemeProvider>
        
        
        </>
    )
}

export default Home