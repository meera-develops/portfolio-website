import { Box, Typography, Button, Container, } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import theme from '../../theme';
import { ThemeProvider } from '@emotion/react';

function Resume() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container
                    sx={{ pb: 5, }}

                >
                    <Box
                        display="flex"
                        flexDirection="column"
                    
                    >
                        <Box
                            component="embed"
                            src="/meera_bhola_resume.pdf"
                            sx={{
                                width: '80%',
                                height: '800px',
                                border: 'none',
                                mt: 4,
                                mb: 2,
                                alignSelf: 'center',
                            }}
                        >
                        </Box>
                        {/* <Box
                            component="img"
                            src="/meera_bhola_resume.png"
                            sx={{
                                width: '100%', 
                                maxWidth: '500px',
                                height: 'auto', 
                                display: 'block', 
                                mt: 4, 
                                mb: 4,
                                alignSelf: 'center',
                                imageRendering: 'crisp-pages'
                            }}
                        >
                        </Box> */}

                        <Box
                            sx={{
                                width: 'fit-content',
                                alignSelf: 'center',
                                mb: 3,
                            }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                href="/meera_bhola_resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="accent"
                                startIcon={<PictureAsPdfIcon />}
                                sx={{
                                    mt: 2,
                                    '&:hover': {
                                      color: 'inherit',  // Preserve the color on hover (no color change)
                                      boxShadow: "0px 0px 40px 20px rgba(185, 114, 187, 1)",
                                    }
                                  }}
                            >
                                Download Resume
                            </Button>
                        </Box>

                    </Box>

                </Container>
            </ThemeProvider>
        
        </>
    )
}

export default Resume