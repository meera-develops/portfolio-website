import './home.css'
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';
//import navbar component here


function Home() {
    return (
        <>
            <div>
                <h1>Welcome to the Home Screen</h1>
                <Typography variant="h4" color="secondary">Hello!!!</Typography>
                <h3 style={{ fontFamily: 'Tektur' }}>This is a demonstration of the special font</h3>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/Projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                </ul>
            </div>
        
        
        </>
    )
}

export default Home