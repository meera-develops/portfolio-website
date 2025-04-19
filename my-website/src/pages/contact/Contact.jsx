import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Typography, ThemeProvider, Button, Box, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import theme from '../../theme';
import MailIcon from '@mui/icons-material/Mail';

// add confirmaiton message for copying email and submitting form 
// perform form validation

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        })
        .then(
            () => {
            console.log('SUCCESS!');
            e.target.reset();
            //include alert or notifcation that the email was successfully sent 
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        //style form better
        <>
            <ThemeProvider theme={theme}>
                <Container
                    sx={{justifyItems: 'center', mt: 4, }}
                >
                    <Box
                        sx={{ display: "flex", flexDirection: "column", width: "100%", 
                        maxWidth: {
                            xs: '85%',
                            lg: 700,
                            xl: 900
                        }, 
                        px: {
                            xs: 3,
                            lg: 5,
                        },
                        gap: 2,
                        backgroundColor: 'rgba(50, 49, 49, 0.8)',
                        }}
                    >
                        <form ref={form} onSubmit={sendEmail}>
                        <Typography variant="h3"
                        sx={{
                            textAlign: 'center',
                            textShadow: `
                            -1px -1px 0 rgba(185, 114, 187, 1),
                            1px -1px 0 rgba(185, 114, 187, 1),
                            -1px 1px 0 rgba(185, 114, 187, 1),
                            1px 1px 0 rgba(185, 114, 187, 1)
                            `    
                        }}
                        >
                            Contact Me:
                        </Typography>

                        <TextField 
                            label="name"
                            variant="filled"
                            fullWidth
                            margin="normal"
                            name="user_name"
                            sx={{
                                backgroundColor: 'white',
                            }}     
                        />
                        <TextField 
                            label="email"
                            variant="filled"
                            fullWidth
                            margin="normal"
                            name="user_email"
                            sx={{
                                backgroundColor: 'white',
                            }} 
                        />

                        <TextField
                            label="subject"
                            variant="filled"
                            fullWidth
                            margin="normal"
                            name="user_subject"
                            sx={{
                                backgroundColor: 'white',
                            }} 
                        />

                        <TextField
                            label="message"
                            variant="filled"
                            fullWidth
                            margin="normal"
                            name="feedback"
                            multiline
                            rows={4}
                            sx={{
                                backgroundColor: 'white',
                            }} 
                        />

                        {/* <input type="submit" value="Send" /> */}
                        <Typography variant="body2"
                            sx={{
                                mt: 3,
                                textAlign: 'center',
                                fontWeight: 'bold',
                            }}
                        >
                            Or if you prefer, you can email me directly at <span style={{cursor: "pointer", color: "#3f5bcc", textDecoration: "underline"}} onClick={() => navigator.clipboard.writeText("meerabhola3@gmail.com")} >meerabhola3@gmail.com</span>
                            {/* add confirmation message here */}
                        </Typography>

                        <Box
                            textAlign="center"
                        >
                            <Button
                                variant="contained"
                                size="small"
                                className="button"
                                type="submit"
                                sx={{
                                    mt:{ xs: 2, md: 3, lg: 4, }, 
                                    mb: 5,
                                    fontSize: { lg: '22px',},
                                    alignItems: "center",
                                    fontFamily: "Tomorrow Medium",
                                    color: "#fff",
                                    //justifyContent: "center",
                                    backgroundColor: "#B972BB",
                                    borderRadius: 5,
                                    letterSpacing: '10px',
                                    //left: '40%',
                                    outline: "4px solid #fff",
                                }}
                                >
                                Send <MailIcon></MailIcon>
                            </Button>
                        </Box>

                       
                        </form>
                    </Box>
                </Container>

            </ThemeProvider>
        
        </>
    )
}


