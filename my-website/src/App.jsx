import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate
// } from "react-router-dom";
// import Home from "./pages/home";
// import Projects from "./pages/Projects";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; 
import { Typography } from '@mui/material';

//import navbar from './components/navbar';

function App() {
  // start styling home page and navbar

  return (
    <>
      <div>
        <Typography variant="h4" color="secondary">Hello!!!</Typography>
        <h3 style={{ fontFamily: 'Tektur' }}>This is a demonstration of the special font</h3>
        <ThemeProvider theme={theme}>
          <h1>Welcome to my project!</h1>
          <h3>This is another example</h3>
        </ThemeProvider>

          {/* <Router>
            <Routes>

              <Route
              exact path="/"
              element={<Home />} />

              <Route 
              path="/Projects"
              element={<Projects />} />

            </Routes>
          </Router> */}
        

      </div>
    </>
  )
}

export default App
