import { createMuiTheme } from '@material-ui/core/styles';
import { purple, deepPurple, indigo, orange, red, cyan } from '@material-ui/core/colors';

const appTheme = createMuiTheme({
    palette: {
        primary: { main: red[500] }, // Purple and green play nicely together.
        secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    },
});

export default appTheme;
