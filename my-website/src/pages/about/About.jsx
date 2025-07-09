import "./about.css";
import { Container, Typography, ThemeProvider, Box, Button, Grid2 } from "@mui/material";
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import theme from "../../theme";
import devBrain from "../../assets/img/developer-icons.svg";
import SkillCard from "../../components/Skills";
import skills from "../../components/mySkills";

function About() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container sx={{pb: 5}}>
                <Box sx={{ mb: 5 }}> 
                        <Stack direction="row">
                            <Typography variant="h3" component="h3"
                            sx={{
                                marginTop: { xs: '40px', md: '50px', },
                                filter: "drop-shadow(20px 0px 30px rgba(185, 114, 187, 0.8))",
                                textShadow: '0px 0px 40px rgba(185, 114, 187, 1)',

                            }}
                            className='aboutText'
                            >
                                About
                            </Typography>
                            <Box
                                component="img"
                                src={devBrain}
                                alt="graphic of mind map that resembles an atom structure"
                                sx={{
                                    width: { xs: '30%', md: '15%', lg: '12%',},
                                    mt: { xs: '1rem', md: '1.5rem'},
                                    ml: { xs: '0.8rem', md: '1rem', lg: '1.5rem', xl: '2rem'},
                                }}
                            
                            >
                            </Box>
                        </Stack>
                    </Box>
                    <Box>
                        <Typography variant="body2">
                            I’m Meera Bhola, a fourth-year web development student at UCF. After discovering my passion for coding in college, I’ve developed skills in web design, HTML, CSS, JavaScript, PHP, mobile development, and more.
                        </Typography>
                                <br></br>
                        {/* <Typography variant="body2">
                            I have a desire to know more and get to the bottom of things. This has led me to great success in professional and academic life. Skilled in web design and web development, I am passionate about creating user-centered web applications that scale well. My academic background has prepared me for a variety of work-case situations. 
                        </Typography> */}
                                <br></br>
                        <Typography variant="body2">
                            When I’m not coding, designing, or doing schoolwork, you’ll find me with friends or exploring hobbies. I’m always open to collaborating on projects and learning new skills. Feel free to contact me using the button above!
                                <br></br><br></br>
                            
                        </Typography>

                        <Typography variant="h3"
                            sx={{
                                marginTop: { xs: '40px', md: '50px', },
                                marginBottom: {
                                    xs: '50px'
                                },
                                filter: "drop-shadow(20px 0px 30px rgba(185, 114, 187, 0.8))",
                                textShadow: '0px 0px 40px rgba(185, 114, 187, 1)',

                            }}
                            >
                                Skills
                            </Typography>

                            <Typography variant="body2">
                                <strong>Below are some of the core technologies I use regularly:</strong><br></br>
                                <br></br>
                            </Typography>
                    </Box>
                    
                    {/* see if you change alignment of skills here */}
                    {/* could make the icons spin upon hover, could make them link to their respective sites */}
                    <Grid2 container spacing={12} justifyContent="center">
                        {skills.map(skill => (
                            <Grid2 item={+true} key={skill.id} xs={12} md={6} lg={4}>
                                <SkillCard skill={skill} />
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
                            component={Link}
                            to="/contact"
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
                                    color: '#fff'
                                },
                            }}
                            >
                            CONTACT
                            </Button>
                        </Box>

                </Container>
            </ThemeProvider>
        
        </>
    )
}

export default About