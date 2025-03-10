import './home.css';
import { Container, Typography, ThemeProvider } from '@mui/material';
//import Grid from '@mui/material/Grid2';
 import { Grid2 } from '@mui/material';
import theme from '../../theme';

function Home() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container>
                    <Grid2 container spacing={4}>
                        <Grid2 item xs={12} md={6} lg={6}>
                            <h1>
                                Meera Bhola
                            </h1>
                            <h2 style={{ fontFamily: 'Tomorrow Medium'}}>
                                Web Designer
                            </h2>
                            <h2 style={{ fontFamily: 'Tomorrow Medium'}}>
                                Front-end Developer
                            </h2>
                            <Typography variant="body2">
                                Passionate web developer crafting responsive, <br />user-centered websites leveraging modern technologies
                            </Typography>
                        </Grid2>
                        <Grid2 item xs={12} md={6} lg={6}>
                            <h2 style={{ fontFamily: 'Tomorrow Medium'}}>
                                Test, testing
                            </h2>
                        </Grid2>
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