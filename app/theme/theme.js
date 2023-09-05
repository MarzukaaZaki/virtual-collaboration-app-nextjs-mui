import { createTheme, responsiveFontSizes } from "@mui/material";


const theme = createTheme({
    typography:{
        fontSize: 14,
    },
    palette:{
        primary:{
            main: '#004b66',
            light: '#2583a4'
        },
        secondary:{
            main: '#a5ebd0'
        }
    },
    zIndex:{
        navDrawer: 1000
    },
    breakpoints:{
        values:{
            mobile: 0,
            tablet: 640,
            laptop: 992,
            desktop: 1024
        }
    },

});

export default responsiveFontSizes(theme);