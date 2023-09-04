const { createTheme } = require("@mui/material");

const theme = createTheme({
    typography:{
        fontSize: 14,
    },
    palette:{
        primary:{
            main: '#0d9e86'
        }
    }

});

export default theme;