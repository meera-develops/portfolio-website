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
            <Card>
                <CardMedia
                    component="img"
                    image={project.img}
                    alt={project.alt}
                />
                <CardContent>
                    <Typography>
                        {project.title}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}