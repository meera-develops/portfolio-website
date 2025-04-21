import "./home.css";
import {
  Container,
  Typography,
  ThemeProvider,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Grid2 } from "@mui/material";
import theme from "../../theme";
import headshot from "../../assets/img/Headshotfx.png";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { motion } from "motion/react";
import { link } from "motion/react-client";

function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          sx={{
            pb: 5,
          }}
        >
          <Grid2
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, md: 6 }}
            justifyContent="space-between"
            alignItems="center"
            sx={{ 
              marginTop:{ xs: 1, sm: 1, md: 3, lg: -2 }
            }}
          >
            <Grid2 item={+true} xs={12} md={6} lg={6}>
              <Typography
                variant="h1"
                component="h1"
                className="overlay"
                marginBottom={2}
              >
                Meera Bhola
              </Typography>
              <Typography
                variant="h2"
                style={{ fontFamily: "Tomorrow Medium" }}
                className="overlay2"
              >
                Web Designer,
              </Typography>
              <Typography
                variant="h2"
                style={{ fontFamily: "Tomorrow Medium" }}
                gutterBottom
                className="overlay2"
              >
                Front-end Developer
              </Typography>
              <Typography variant="body2">
                Passionate web developer crafting responsive, <br />
                user-centered websites leveraging modern technologies
              </Typography>
            </Grid2>

            <Grid2 item={+true} xs={12} md={6} lg={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: '100%'
                }}
              >
                <img
                  src={headshot}
                  alt="Headshot of Meera Bhola"
                  className="headshot"
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto',
                    width: 'auto',
                    objectFit: 'cover',
                  }}
                ></img>
              </Box>
            </Grid2>
          </Grid2>

          <Box sx={{ 
            mt: { sm: 3, md: 1, } 
            }}>

            <Box
               sx={{
                marginX: 0,
                paddingX: 0,
                position: 'relative',
                width: '100vw',
                overflow: 'hidden',
              }}
            >
              <motion.div
                display="flex"
                animate={{
                  x: ['-100%', '80%'],
                  transition: {
                      ease: 'linear',
                      duration: 7,
                      repeat: Infinity,
                  }
              }}
              >
                <Box display="flex" width="100%">
                  <Box
                    flex="1"
                    display="flex"
                    justifyContent="center"
                    className="mouse-icons"
                  >
                    <MouseOutlinedIcon
                      sx={{
                        color: "#AEA5D4",
                        fontSize: { xs: "3rem", md: "4rem", lg: "5rem", xxl: "9rem"},
                        filter: "drop-shadow(4px 2px 6px rgba(185, 114, 187, 1))",
                      }}
                    />
                  </Box>

                  <Box
                    flex="1"
                    display="flex"
                    justifyContent="center"
                    className="keyboard-icons"
                  >
                    <KeyboardAltOutlinedIcon
                      sx={{
                        color: "#AEA5D4",
                        fontSize: { xs: "3rem", md: "4rem", lg: "5rem", xxl: "9rem"},
                        filter: "drop-shadow(4px 2px 6px rgba(185, 114, 187, 1))",
                      }}
                    />
                  </Box>

                  <Box
                    flex="1"
                    display="flex"
                    justifyContent="center"
                    className="screen-icons"
                  >
                    <DesktopWindowsOutlinedIcon
                      sx={{
                        color: "#AEA5D4",
                        fontSize: { xs: "3rem", md: "4rem", lg: "5rem", xxl: "9rem"},
                        filter: "drop-shadow(4px 2px 6px rgba(185, 114, 187, 1))",
                      }}
                    />
                  </Box>

                  <Box
                    flex="1"
                    display="flex"
                    justifyContent="center"
                    className="web-icons"
                  >
                    <LanguageOutlinedIcon
                      sx={{
                        color: "#AEA5D4",
                        fontSize: { xs: "3rem", md: "4rem", lg: "5rem", xxl: "9rem"},
                        filter: "drop-shadow(4px 2px 6px rgba(185, 114, 187, 1))",
                      }}
                    />
                  </Box>
                </Box>

              </motion.div>

            </Box>

              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: { xs: "2rem", lg: '0rem'}
              }}>  
                <Button
                  component={Link}
                  to="/projects"
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
                    //left: '40%',
                    letterSpacing: '10px',
                    outline: "4px solid #fff",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      boxShadow: "0px 0px 40px 20px rgba(185, 114, 187, 1)",
                      color: '#fff',
                    },
                  }}
                >
                  PROJECTS
                </Button>
              </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Home;
