import { Link } from "react-router-dom";


function About() {
    return (
        <>
            <div>
                <h1>Learn more about ME</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/projects'>Projects</Link>
                    </li>
                </ul>
            </div>
        
        </>
    )
}

export default About