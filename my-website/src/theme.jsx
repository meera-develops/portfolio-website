import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import TekturTtf from './assets/fonts/tektur-variable.ttf';

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
        fontFamily: 'Tektur',
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightSemiBold: 600,
        fontWeightBold: 700,
        fontWeightExtraBold: 800,
        fontWeightBlack: 900,

    },
});

export default theme;