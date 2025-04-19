import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";
import Navbar from "./components/navbar";
import Resume from "./pages/resume/Resume";
import Contact from './pages/contact/Contact';
import Footer from './components/footer';

function App() {

  return (
    <>
      <div style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',

      }}>
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
          <Footer />
        
      </div>
    </>
  )
}

export default App
