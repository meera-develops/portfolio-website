import { React } from 'react';
import { Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions'; //buttons can go in here 
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea'; //to wrap card and trigger action within it 
import './projectCard.css';

//make projects clickable


export default function ProjectCard({ project }) {
    return (
        <div>
            <Card
                sx={{
                    maxWidth: 505,
                    margin: 'auto',
                    paddingY: '20px',
                    paddingRight: '30px',
                    paddingLeft: '20px',
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        md: 'row'
                    },
                    gap: 2,
                    justifyContent: 'space-between',
                    background: 'linear-gradient(135deg, #D6CCFD 0%, rgba(63, 58, 83, 0.5) 100%)',
                    height: '100%',
                    borderRadius: '30px'
                }}
            >
                <CardMedia
                    component="img"
                    image={project.img}
                    alt={project.alt}
                    sx={{
                        height: 300,
                        maxWidth: 300,
                        objectFit: 'contain',
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
                                borderWidth: '1.5px',


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
                                borderWidth: '1.5px',

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
                                borderWidth: '1.5px',
                            }}
                        >
                            {project.software}
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}