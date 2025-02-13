import './styles/home.css'
import { Link } from "react-router-dom";
//import navbar component here


function Home() {
    return (
        <>
            <div>
                <h1>Welcome to the Home Screen</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/Projects">Projects</Link>
                    </li>
                </ul>
            </div>
        
        
        </>
    )
}

export default Home