import { ThemeProvider } from "@emotion/react";
import "./projects.css";
import theme from "../../theme";
import { Container, Typography, Grid2, Box } from "@mui/material";
import laptop from "../../assets/img/laptop-icon.png";
import Stack from '@mui/material/Stack';

// maybe use box or stack for alternative layout


function Projects() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container>
                    <Box>
                        <Stack
                            direction={{xs: "column", md: "row"}}
                            spacing={3}
                        >
                            <img src={laptop} alt="laptop icon with image of website design inside"></img>
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{ alignSelf: 'center' }}
                            >
                            Projects allow applicants to demonstrate their skills and provide proof of their work. Here are some recent projects.
                            </Typography>


                        </Stack>
                    </Box>
                    {/* <Grid2
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, md: 6 }}
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ 
                          marginTop:{ xs: 1, sm: 1, md: 3, lg: 3 }
                        }}
                    > */}
                        {/* Figure out how to get these two items side-by-side */}
                        {/* create cards */}
                        {/* <Grid2 item xs={12} md={6} lg={6} sx={{ border: '1px solid red' }} >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    //height: '100%',
                                    maxWidth: '100%',
                                }}
                            >
                                <img
                                src={laptop}
                                alt="laptop icon with image of website design inside"
                                className="laptop-icon"
                                style={{ maxWidth: '100%', height: 'auto',  objectFit: 'contain' }}
                                ></img>
                            </Box>
                        </Grid2>
                        <Grid2 item xs={12} md={6} lg={6} sx={{ border: '1px solid red' }}>
                            <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 2,
                                textAlign: 'center',

                            }}>

                            <Typography
                                variant="h4"
                                component="h4"
                            >
                            Projects allow applicants to demonstrate their skills and provide proof of their work. Here are some recent projects.
                            </Typography>
                            </Box>

                        </Grid2>

                    </Grid2> */}
                </Container>
            </ThemeProvider>
        
        </>
    )
}

export default Projects