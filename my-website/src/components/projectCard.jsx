import { React, useRef } from 'react';
import { Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { motion, useMotionTemplate, useMotionValue, useSpring, } from "framer-motion";
import './projectCard.css';

export default function ProjectCard({ project }) {

  const ROTATION_RANGE = 32.5;
  const HALF_ROTATION_RANGE = 32.5 / 2;
    
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
    console.log('mouseX:', mouseX, 'mouseY:', mouseY);
  };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (

        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
            transformStyle: "preserve-3d",
            transform,
            pointerEvents: 'auto'
            }}
        >
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
        </motion.div>
    )
}