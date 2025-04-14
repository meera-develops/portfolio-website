import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles'; 
// import TekturTtf from './assets/fonts/tektur-variable.ttf';

let theme = createTheme({
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
            fontSize: '5rem',
            // [theme.breakpoints.down('sm')]: {
            //     fontSize: '3rem',
            // },
            // [theme.breakpoints.down('xs')]: {
            //     fontSize: '2rem'
            // },
        },
        h3: {
            fontFamily: 'Tomorrow Medium',
            fontSize: '5rem',
        },
        h4: {
            fontFamily: 'Josefin Sans',
            fontSize: '2.5rem'  
        },
        h5: {
            fontFamily: 'Tomorrow Medium',
            fontSize: '2.5rem'
        },
        body1: {
            fontFamily: 'Tektur',
        },
        body2: {
            fontFamily: 'Josefin Sans',
            fontSize: '1.4rem'
        },
        body3: {
            fontFamily: "Tomorrow Medium",
            
        }
    },
});

theme = responsiveFontSizes(theme);

export default theme;