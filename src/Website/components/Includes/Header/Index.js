import React from 'react';
import {useHistory} from "react-router-dom";
import { fade, makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Menu, MenuItem, Button, IconButton, Badge, Typography, InputBase} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { logoutUser } from "./../../../../redux/actions/authActions";
import './index.scss';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        // display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            // marginLeft: theme.spacing(3),
            marginLeft: '25%',
            width: '18%',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    button: {
        // marginTop: 20,
    },
}));

const Header = props => {
    const classes = useStyles();
    let history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const navigateToDashboard = () => {
        history.push('/users/dashboard');
    };

    const userLogout = e => {
        e.preventDefault();
        props.logoutUser();
        history.push('/login');
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {/*<MenuItem onClick={handleMenuClose}>Profile</MenuItem>*/}
            <MenuItem onClick={navigateToDashboard}>My account</MenuItem>
            <MenuItem onClick={userLogout}><LogoutIcon style={{ color: 'red'}} /> Logout</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Button
                    component={Link}
                    className={classes.button}
                    raised
                    color="inherit"
                    to="/"
                >
                    {'Home'}
                </Button>
            </MenuItem>
            <MenuItem>
                <Button
                    component={Link}
                    className={classes.button}
                    raised
                    color="inherit"
                    to="/about"
                >
                    {'About'}
                </Button>
            </MenuItem>
            {props.auth.isAuthenticated !== true && (
                <>
                    <MenuItem>
                        <Button
                            component={Link}
                            className={classes.button}
                            raised
                            color="inherit"
                            to="/login"
                        >
                            {'Login'}
                        </Button>
                    </MenuItem>
                    <MenuItem>
                        <Button
                            component={Link}
                            className={classes.button}
                            raised
                            color="inherit"
                            to="/register"
                        >
                            {'Register'}
                        </Button>
                    </MenuItem>
                </>
            )}
            {props.auth.isAuthenticated === true && (
                <MenuItem onClick={handleProfileMenuOpen}>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            )}
        </Menu>
    );

    return (
        <div className={`${classes.grow} app-header`}>
            <AppBar position="static">
                <Toolbar>
                    {/*<IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>*/}
                    <Typography className={classes.title} variant="h6" noWrap>
                        {process.env.REACT_APP_NAME || 'ReactJS ADMIN'}
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        {/*<IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>*/}

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
                        {props.auth.isAuthenticated !== true && (
                            <>
                                <Button
                                    component={Link}
                                    className={classes.button}
                                    raised
                                    color="inherit"
                                    to="/login"
                                >
                                    {'Login'}
                                </Button>
                                <Button
                                    component={Link}
                                    className={classes.button}
                                    raised
                                    color="inherit"
                                    to="/register"
                                >
                                    {'Register'}
                                </Button>
                            </>
                        )}
                        {props.auth.isAuthenticated === true && (
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        )}
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
};

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, {logoutUser})(Header);
