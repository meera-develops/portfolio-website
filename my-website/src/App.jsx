import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import Home from "./pages/home/home";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";
import Navbar from "./components/navbar";
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
              path="/contact"
              element={<Contact />} />

            </Routes>
          </Router>
        

      </div>
    </>
  )
}

export default App
