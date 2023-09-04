const { createTheme } = require("@mui/material");

const theme = createTheme({
    typography:{
        fontSize: 14,
    },
    palette:{
        primary:{
            main: '#0d9e86'
        }
    },
    zIndex:{
        navDrawer: 1000
    },
    breakpoints:{
        values:{
            mobile: 576,
            tablet: 768,
            laptop: 992,
            desktop: 1200
        }
    },

});

export default theme;