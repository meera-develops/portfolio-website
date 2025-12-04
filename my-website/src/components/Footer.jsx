import React from 'react';
import { Box, Typography } from '@mui/material';
import theme from "../theme";
import { ThemeProvider } from '@emotion/react';


export default function Footer() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box
                    component="footer"
                    sx={{
                        width: '100%',
                        textAlign: 'center',
                        py: 2,
                        mt: 'auto',
                        backgroundColor: 'black'
                    }}
                >
                    <Typography variant="body2">
                    © 2025 <a href="https://www.linkedin.com/in/meera-bhola/" target="_blank" rel="noopener no referrer" aria-label="Meera's LinkedIn Profile" cursor="pointer">Meera Bhola</a> | Web Developer
                    </Typography>

                </Box>
            </ThemeProvider>

        
        
        </>
    )
}