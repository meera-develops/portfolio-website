import './home.css';
import { Container, Typography, ThemeProvider, Box } from '@mui/material';
import { Grid2 } from '@mui/material';
import theme from '../../theme';
import headshot from '../../assets/img/Headshotfx.png';

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

                        {/* <Grid2 item xs={12} md={3}>
                            <Typography>Test</Typography>
                        </Grid2> */}

                    </Grid2>
                </Container>
            </ThemeProvider>
        
        
        </>
    )
}

{/* <div>
                    <h1>Meera Bhola</h1>
                    <Typography variant="h4" color="secondary">Hello!!!</Typography>
                    <h3 style={{ fontFamily: 'Tektur' }}>This is a demonstration of the special font</h3>
                </div> */}

export default Home