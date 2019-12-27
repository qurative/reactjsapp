import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core";
import AdminLogin from "../../Admin/components/Auth/Login";
import AdminLeftBar from "../../Admin/components/Includes/Sidebar/AdminLeftBar";
import AdminHeader from "../../Admin/components/Includes/Header/AdminHeader";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    appFrame: {
        zIndex: 1,
        overflow: "hidden",
        height: "100vh"
    },
    contentWrapper: {
        overflow: "auto",
        position: "fixed",
        top: theme.spacing.unit * 8,
        height: "calc(100% - 64px)", // Subtract width of header
        backgroundColor: theme.palette.background.default,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    "content-left": {
        marginLeft: drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    content: {
        padding: theme.spacing.unit * 3
    },
}));

const AdminLayout = props => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div className={classes.appFrame}>
                <AdminLeftBar open={open} />
                <AdminHeader handleDrawerToggle={handleDrawerToggle}/>
                <div
                    className={classNames(classes.contentWrapper, {
                        [classes.contentShift]: open,
                        [classes[`content-left`]]: open
                    })}
                >
                    <div className={classes.content}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

AdminLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default AdminLayout;
