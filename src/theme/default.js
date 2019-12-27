import { createMuiTheme } from '@material-ui/core/styles';
import { purple, deepPurple, indigo, orange, red, cyan } from '@material-ui/core/colors';

// #6200EE
const appTheme = createMuiTheme({
    palette: {
        // primary: { main: red[500] }, // Purple and green play nicely together.
        primary: { main: deepPurple[500] }, // Purple and green play nicely together.
        secondary: { main: orange[900] }, // This is just green.A700 as hex.
    },
});

export default appTheme;
