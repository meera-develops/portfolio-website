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
                <Fab
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
                        style={{
                            width: '50%', height: '50%'

                        }}
                    />
                </Fab>
                <Typography
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