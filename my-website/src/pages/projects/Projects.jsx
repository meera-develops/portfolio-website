import { ThemeProvider } from "@emotion/react";
import "./projects.css";
import theme from "../../theme";
import { Container, Typography, Grid2, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import laptop from "../../assets/img/laptop-icon.png";
import atom from "../../assets/img/atom.svg";
import Stack from '@mui/material/Stack';
import projects from "../../components/myProjects";
import ProjectCard from '../../components/projectCard';


function Projects() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container
                    sx={{ pb: 5, }}

                >
                    <Box>
                        <Stack
                            direction={{xs: "column", md: "row"}}
                            style={{ height: '100%' }}
                            spacing={{ xs:3, lg:12 }}
                        >
                            <img src={laptop} alt="laptop icon with image of website design inside"></img>
                            <Typography
                                variant="body3"
                                sx={{ 
                                    alignSelf: 'center', 
                                    filter: "drop-shadow(0px 0px 11px rgba(255, 255, 255, 1))",
                                    fontSize: '2.2rem'
                                }}
                            >
                            Below you'll find an assortment of recent web design and web development projects I've worked on. Each project can be clicked on to view more.
                            </Typography>
                        </Stack>
                    </Box>
                    
                    <Box sx={{ ml: 5, mb: 5 }}> 
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
                        </Stack>
                    </Box>

                    <Grid2 container spacing={5}>
                        {projects.map(project => (
                            <Grid2 item={+true} key={project.id} xs={12} md={6}>
                                <ProjectCard project={project} />
                            </Grid2>
                        ))}
                    </Grid2>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: { xs: "2rem", lg: '0rem'}
                        }}>  
                            <Button
                            variant="contained"
                            size="large"
                            className="button"
                            sx={{
                                mt:{ md: 3, lg: 6, xl: 9 }, 
                                mb: 4,
                                fontSize: { lg: '50px', xl: '60px'},
                                alignItems: "center",
                                fontFamily: "Tomorrow Medium",
                                color: "#fff",
                                justifyContent: "center",
                                backgroundColor: "#B972BB",
                                borderRadius: 5,
                                letterSpacing: '10px',
                                //left: '40%',
                                outline: "4px solid #fff",
                                transition: "all 0.4s ease",
                                "&:hover": {
                                    boxShadow: "0px 0px 40px 20px rgba(185, 114, 187, 1)",
                                    color: "#fff"
                                },
                            }}
                            >
                            ABOUT
                            </Button>
                        </Box>
                    
                </Container>
            </ThemeProvider>
        
        </>
    )
}

export default Projects