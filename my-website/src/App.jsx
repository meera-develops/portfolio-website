import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/Projects";

function App() {

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
