import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Button, IconButton, Menu, MenuItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import AccountCircle from "@material-ui/icons/AccountCircle";
import './index.scss';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: "fixed",
        width: "100%",
        zIndex: 1400
    },
    menuButton: {
        marginLeft: 12,
        // marginRight: 20
        marginRight: 0
    },
    grow: {
        flexGrow: 1,
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
}));

const AdminHeader = (props) => {
    const classes = useStyles();

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
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
        </Menu>
    );

    return (
        <div className={classes.grow}>
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
    )
};

AdminHeader.propTypes = {
    handleDrawerToggle: PropTypes.func.isRequired,
};

export default AdminHeader;
