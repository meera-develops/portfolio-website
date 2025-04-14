import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";
import Navbar from "./components/navbar";
import Resume from "./pages/resume/Resume";
import Contact from './pages/contact/Contact';

function App() {

  return (
    <>
      <div>
          <Router>
            <Navbar />
            <Routes>

              <Route
              exact path="/"
              element={<Home />} />

              <Route 
              path="/projects"
              element={<Projects />} />

              <Route
              path="/about"
              element={<About />} />

              <Route
              path="/resume"
              element={<Resume />} />

              <Route
              path="/contact"
              element={<Contact />} />

            </Routes>
          </Router>
        

      </div>
    </>
  )
}

export default App
