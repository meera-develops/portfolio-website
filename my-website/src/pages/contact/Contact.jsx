import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Typography,
  ThemeProvider,
  Button,
  Box,
  Container,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import theme from "../../theme";
import MailIcon from "@mui/icons-material/Mail";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/alert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// perform form validation
// add confirmaiton message for submitting form

export default function Contact() {
  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    setCompleted(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setCompleted(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          //include alert or notifcation that the email was successfully sent
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container sx={{ justifyItems: "center", mt: { xs: 2, lg: 3 }, pb: 5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: {
                xs: "85%",
                lg: 700,
                xl: 900,
              },
              px: {
                xs: 3,
                lg: 5,
              },
              pt: 1,
              gap: 2,
              backgroundColor: "rgba(50, 49, 49, 0.8)",
            }}
          >
            <form ref={form} onSubmit={sendEmail}>
              <Typography
                variant="h3"
                sx={{
                  textAlign: "center",
                  textShadow: `
                            -2px -2px 0 rgba(185, 114, 187, 1),
                            2px -1px 0 rgba(185, 114, 187, 1),
                            -2px 2px 0 rgba(185, 114, 187, 1),
                            2px 1px 0 rgba(185, 114, 187, 1)
                            `,
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
                required
                sx={{
                  backgroundColor: "white",
                }}
              />
              <TextField
                label="email"
                variant="filled"
                fullWidth
                required
                margin="normal"
                name="user_email"
                sx={{
                  backgroundColor: "white",
                }}
              />

              <TextField
                label="subject"
                variant="filled"
                fullWidth
                required
                margin="normal"
                name="user_subject"
                sx={{
                  backgroundColor: "white",
                }}
              />

              <TextField
                label="message"
                variant="filled"
                fullWidth
                margin="normal"
                name="feedback"
                multiline
                rows={3}
                sx={{
                  backgroundColor: "white",
                }}
              />

              <Typography
                variant="body2"
                sx={{
                  mt: 3,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Or if you prefer, you can email me directly at{" "}
                <span
                  style={{
                    cursor: "pointer",
                    color: "#4f66d6",
                    textDecoration: "underline",
                  }}
                  onClick={() => {
                    navigator.clipboard.writeText("meerabhola3@gmail.com");
                    handleClick();
                  }}
                >
                  {" "}
                  meerabhola3@gmail.com
                </span>
                {/* add confirmation message here */}
              </Typography>
              <Snackbar
                open={completed}
                autoHideDuration={4000}
                onClose={handleClose}
                message="Email address copied"
                action={action}
              />

              <Box textAlign="center">
                <Button
                  variant="contained"
                  size="small"
                  className="button"
                  type="submit"
                  sx={{
                    mt: { xs: 2, md: 3, lg: 4 },
                    mb: 5,
                    fontSize: { lg: "24px" },
                    alignItems: "center",
                    fontFamily: "Tomorrow Medium",
                    color: "#fff",
                    //justifyContent: "center",
                    backgroundColor: "#B972BB",
                    borderRadius: 5,
                    letterSpacing: "10px",
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
  );
}
