import './home.css';
import { Container, Typography } from '@mui/material';

//learn MUI
//add grid and picture to be side by side with my name 
//add stroke to name
//add copy 

//work on other pages 

//order: projects, contact, about, resume 

function Home() {
    return (
        <>
            <Container>
                <div>
                    <h1>Meera Bhola</h1>
                    <Typography variant="h4" color="secondary">Hello!!!</Typography>
                    <h3 style={{ fontFamily: 'Tektur' }}>This is a demonstration of the special font</h3>
                </div>
            </Container>
        
        
        </>
    )
}

export default Home