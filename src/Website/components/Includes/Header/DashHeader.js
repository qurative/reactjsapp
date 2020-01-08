import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import {Button, Menu, MenuItem} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { logoutUser } from "./../../../../redux/actions/authActions";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
}));

const DashHeader = props => {
    const classes = useStyles();
    let history = useHistory();

    const isMenuOpen = Boolean(props.anchorEl);
    const handleMenuOpen = event => {
        props.setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        props.setAnchorEl(null);
    };
    const navigateToDashboard = () => {
        history.push('/users/dashboard');
    };
    const userLogout = e => {
        e.preventDefault();
        props.logoutUser();
        history.push('/login');
    };
    return (
        <>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, props.open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleDrawerOpen}
                        className={clsx(classes.menuButton, props.open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Dashboard
                    </Typography>
                    <Button
                        component={Link}
                        className={classes.button}
                        raised
                        color="inherit"
                        to="/"
                    >
                        {'Home'}
                    </Button>
                    <Button
                        component={Link}
                        className={classes.button}
                        raised
                        color="inherit"
                        to="/about"
                    >
                        {'About'}
                    </Button>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls="account-menu"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        anchorEl={props.anchorEl}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        id="account-menu"
                        keepMounted
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={isMenuOpen}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={navigateToDashboard}>My account</MenuItem>
                        <MenuItem onClick={userLogout}><LogoutIcon style={{ color: 'red'}} />&nbsp; Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </>
    );
};

DashHeader.prototype = {
    open: PropTypes.bool.isRequired,
    handleDrawerOpen: PropTypes.func.isRequired,
    anchorEl: PropTypes.bool.isRequired,
    setAnchorEl: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logoutUser})(DashHeader);
