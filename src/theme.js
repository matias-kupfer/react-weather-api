import {createMuiTheme} from "@material-ui/core";
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: orange,
    },
    status: {
        danger: 'red'
    },
})
export default theme;
