import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./pages/home/home";
import Projects from "./pages/projects/Projects";


//import navbar from './components/navbar';

function App() {
  // develop navbar component and have it land you on the home page

  return (
    <>
      <div>
          <Router>
            <Routes>

              <Route
              exact path="/"
              element={<Home />} />

              <Route 
              path="/Projects"
              element={<Projects />} />

            </Routes>
          </Router>
        

      </div>
    </>
  )
}

export default App
