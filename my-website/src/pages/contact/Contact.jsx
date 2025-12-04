import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Typography, ThemeProvider, Button, Box, Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import theme from "../../theme";
import MailIcon from "@mui/icons-material/Mail";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import * as Yup from "yup";

const validationSchema = Yup.object({
  user_name: Yup.string().required("Name is required"),
  user_email: Yup.string().email("Invalid email address").required("Email is required"),
  user_subject: Yup.string().required("Subject is required"),
  feedback: Yup.string().required("Message is required"),
});

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    feedback: "",
  });
  const [errors, setErrors] = useState({});

  const handleClick = () => {
    setCompleted(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setCompleted(false);
    setSuccessMessage(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = async () => {
    try {
      await validationSchema.validate(formValues, { abortEarly: false });
      return {};
    } catch (err) {
      const validationErrors = err.inner.reduce((acc, curr) => {
        acc[curr.path] = curr.message;
        return acc;
      }, {});
      return validationErrors;
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const formErrors = await validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      //set focus to first error found 
      // const firstErrorField = Object.keys(formErrors)[0];
      // const el = document.getElementById(firstErrorField);
      // if (el) el.focus();

      return;
    }

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
          setFormValues({
            user_name: "",
            user_email: "",
            user_subject: "",
            feedback: "",
          }); 
          setErrors({}); 
          setSuccessMessage(true);
          // e.target.reset();
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
              <Box aria-live="assertive" role="alert" 
              sx={{
                position: "absolute",
                width: '1px',
                height: '1px',
                clip: "rect(0,0,0,0)", 
              }}>
                {Object.keys(errors).length > 0 && Object.values(errors).join(". ")}
              </Box>

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
              <Typography variant="body2"
                textAlign="center"
                sx={{
                  mt: 1
                }}
              >
                Let's work together! Feel free to reach out with project ideas or potential work opportunities.
              </Typography>

              <TextField
                label="name"
                variant="filled"
                fullWidth
                margin="normal"
                name="user_name"
                value={formValues.user_name}
                onChange={handleChange}
                error={!!errors.user_name}
                helperText={errors.user_name || ""}
                // required
                sx={{
                  backgroundColor: "white",
                }}
              />
              <TextField
                label="email"
                variant="filled"
                fullWidth
                // required
                margin="normal"
                name="user_email"
                value={formValues.user_email}
                onChange={handleChange}
                error={!!errors.user_email}
                helperText={errors.user_email || ""}
                sx={{
                  backgroundColor: "white",
                }}
              />

              <TextField
                label="subject"
                variant="filled"
                fullWidth
                // required
                margin="normal"
                name="user_subject"
                value={formValues.user_subject}
                onChange={handleChange}
                error={!!errors.user_subject}
                helperText={errors.user_subject || ""}
                sx={{
                  backgroundColor: "white",
                }}
              />

              <TextField
                label="message"
                variant="filled"
                fullWidth
                // required
                margin="normal"
                name="feedback"
                value={formValues.feedback}
                onChange={handleChange}
                multiline
                rows={3}
                sx={{
                  backgroundColor: "white",
                }}
                error={!!errors.feedback}
                helperText={errors.feedback || ""}
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
                autoHideDuration={3250}
                onClose={handleClose}
                message="Email address copied"
                action={action}
                ContentProps={{
                  sx: {
                    backgroundColor: '#5155bd',
                  },
                }}
              />

              <Snackbar
                open={successMessage}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Your form has been submitted successfully!"
                action={action}
                ContentProps={{
                  sx: {
                    backgroundColor: "green", // Ensures that the background color stays green
                  },
                }}
              />

              <Box textAlign="center">
                <Button
                  variant="contained"
                  size="small"
                  className="button"
                  type="submit"
                  sx={{
                    mt: { xs: 3, md: 3, lg: 4 },
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
