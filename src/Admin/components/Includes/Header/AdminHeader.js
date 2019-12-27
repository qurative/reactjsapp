import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import styles from './styles';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    appBar: {
        position: "fixed",
        width: "100%",
        zIndex: 1400
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20
    },
}));

const AdminHeader = (props) => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} elevation={0}>
            <Toolbar disableGutters={true}>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={props.handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" noWrap>
                    {process.env.REACT_APP_NAME || 'ReactJS ADMIN'}
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

AdminHeader.propTypes = {
    handleDrawerToggle: PropTypes.func.isRequired,
};

export default AdminHeader;
