import { ThemeProvider } from "@emotion/react";
import "./projects.css";
import theme from "../../theme";
import { Container, Typography, Grid2, Box } from "@mui/material";
import laptop from "../../assets/img/laptop-icon.png";
import atom from "../../assets/img/atom.svg";
import Stack from '@mui/material/Stack';
//import { sizing } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions'; //buttons can go in here 
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea'; //to wrap card and trigger action within it 

// maybe use box or stack for alternative layout


function Projects() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container>
                    <Box>
                        <Stack
                            direction={{xs: "column", md: "row"}}
                            style={{ height: '100%' }}
                            spacing={{ xs:3, lg:12 }}
                        >
                            <img src={laptop} alt="laptop icon with image of website design inside"></img>
                            <Typography
                                variant="h5"
                                component="h5"
                                className="intro-text"
                                sx={{ 
                                    alignSelf: 'center', 
                                    filter: "drop-shadow(0px 0px 11px rgba(255, 255, 255, 1))" 
                                }}
                            >
                            Projects allow applicants to demonstrate their skills and provide proof of their work. Here are some recent projects.
                            </Typography>
                        </Stack>
                    </Box>
                    
                    <Box sx={{ ml: 5 }}> 
                        <Stack direction="row">
                            <Typography variant="h3" component="h3"
                            sx={{
                                marginTop: { xs: '40px', md: '50px', },
                                filter: "drop-shadow(20px 0px 40px rgba(185, 114, 187, 0.8))",
                                textShadow: '8px 6px 40px rgba(185, 114, 187, 1)',

                            }}
                            className='projectsText'
                            >
                                Projects
                            </Typography>
                            <Box
                                component="img"
                                src={atom}
                                alt="graphic of mind map that resembles an atom structure"
                                sx={{
                                    width: { xs: '30%', md: '15%'},
                                    mt: { xs: '1.6rem', md: '1.5rem'},
                                    ml: { xs: '0.5rem', md: '1rem', xl: '2rem'},
                                }}
                            
                            >

                            </Box>
                            {/* <img src={atom} 
                            alt="graphic of mind map that resembles an atom structure"
                            sx={{
                                width: { xs: '10px', lg: '10px', }
                            }}
                            // width="10%"
                            className='atomImage'
                            ></img> */}
                        </Stack>
                    </Box>
                    <Grid2>

                    </Grid2>
                    
                </Container>
            </ThemeProvider>
        
        </>
    )
}

export default Projects