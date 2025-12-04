import { React } from 'react';
import { Typography, Box, Fab } from '@mui/material';

export default function Skills({ skill }) {
    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                // mx={2}
            >
                {/* change this to be not a Fab so that SR doesn't read it as button */}
                <Fab
                    aria-label={`${skill.label} logo`}
                    sx={{
                        width: 150,
                        height: 150,
                        backgroundColor: '#ffffff',
                        cursor: 'default',
                        pointerEvents: 'none'
                    }}
                >
                    <img 
                        src={skill.image}
                        alt=""
                        style={{
                            width: '50%', height: '50%'

                        }}
                    />
                </Fab>
                <Typography
                    aria-hidden="true"
                    sx={{
                        mt: 2,
                        textAlign: 'center',
                        fontSize: '1.2rem'
                    }}
                >
                    {skill.label}
                </Typography>
            </Box>
        </>
    )
}