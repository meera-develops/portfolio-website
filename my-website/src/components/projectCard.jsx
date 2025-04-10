import { React } from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions'; //buttons can go in here 
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea'; //to wrap card and trigger action within it 


export default function ProjectCard({ project }) {
    return (
        <div>
            <Card
                sx={{
                    maxWidth: 500,
                    margin: 'auto',
                    paddingY: '20px',
                    paddingRight: '10px',
                    paddingLeft: '20px',
                    display: 'flex',
                    flexDirection: 'row',
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
                        height: 250,
                        objectFit: 'contain',
                        borderRadius: '10px',
                        boxShadow: 5,
                    }}
                />
                <CardContent
                    sx={{
                        color: 'white'
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
                </CardContent>
            </Card>
        </div>
    )
}