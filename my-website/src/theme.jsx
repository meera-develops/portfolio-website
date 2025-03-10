import { createTheme, ThemeProvider } from '@mui/material/styles'; 
// import TekturTtf from './assets/fonts/tektur-variable.ttf';

const theme = createTheme({
    palette: {
        primary: {
            main: '#AEA5D4'
        },
        secondary: {
            main: '#683979',
        },
        accent: {
            main: '#B972BB',
        },
        text: {
            main: '#EEEBF5',
        },
        background: {
            main: '#040307'
        }
    },
    typography: {
        fontFamily: "'Josefin Sans', sans-serif",
        h1: {
            fontFamily: 'Tektur',
        },
        h3: {
            fontFamily: 'Tomorrow Medium'
        },
        body1: {
            fontFamily: 'Tektur',
        },
        body2: {
            fontFamily: 'Josefin Sans',
            fontSize: '1.1rem'
        }
    },
});

export default theme;