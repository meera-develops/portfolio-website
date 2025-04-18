import { React } from 'react';
import { Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './projectCard.css';

export default function ProjectCard({ project }) {
    return (
        <a href={project.url} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
            <Card
                sx={{
                    maxWidth: 505,
                    margin: 'auto',
                    paddingY: '30px',
                    paddingRight: '30px',
                    paddingLeft: '20px',
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        md: 'row'
                    },
                    cursor: 'pointer',
                    gap: 2,
                    justifyContent: 'space-between',
                    background: 'linear-gradient(135deg, #D6CCFD 0%, rgba(63, 58, 83, 0.5) 100%)',
                    height: {
                        xs: 'auto',
                        lg: 350,
                    },
                    borderRadius: '30px'
                }}
            >
                <CardMedia
                    component="img"
                    image={project.img}
                    alt={project.alt}
                    sx={{
                        height: {
                            xs: 300,
                            lg: 300,
                        },
                        maxWidth: 280,
                        objectFit: 'contain',
                        alignSelf: 'center',
                        //borderRadius: '10px',
                    }}
                />
                <CardContent
                    sx={{
                        color: 'white',
                        alignSelf: 'center',
                    }}
                >
                    <Typography gutterBottom
                    sx={{
                        whiteSpace: 'nowrap',
                        fontWeight: '600',
                        textDecoration: 'underline'
                    }}>
                        {project.title}
                    </Typography>
                    <Typography gutterBottom 
                        sx={{
                            fontFamily: 'Helvetica',
                        }}
                    >
                        {project.description}
                    </Typography>

                    <Box sx={{
                        marginTop: 2,
                        display: 'flex',
                        gap: 1,
                        marginX: '5', 
                        flexWrap: 'wrap',
                        pointerEvents: 'none',
                        
                    }}
                    >
                        <Button
                            variant="outlined"
                            size="small"
                            className="btnOutlines"
                            sx={{
                                fontSize: '0.7rem',
                                fontWeight: '700',
                                borderRadius: '20px',
                                borderWidth: '1.8px',
                            }}
                        >
                            {project.date}
                        </Button
                        >
                        <Button
                            variant="outlined"
                            sx={{
                                fontSize: '0.7rem',
                                fontWeight: '700',
                                borderRadius: '20px',
                                borderWidth: '1.8px',

                            }}
                        >
                            {project.skills}
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                fontSize: '0.7rem',
                                fontWeight: '700',
                                borderRadius: '20px',
                                borderWidth: '1.8px',
                            }}
                        >
                            {project.software}
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </a>
    )
}