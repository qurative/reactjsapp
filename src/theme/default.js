import { createMuiTheme } from '@material-ui/core/styles';
import { purple, deepPurple, indigo, orange, deepOrange, green, red, cyan } from '@material-ui/core/colors';

// #6200EE
const appTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#D95F4A',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

export default appTheme;
