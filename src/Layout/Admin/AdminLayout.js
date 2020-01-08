import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core";
import AdminLeftBar from "../../Admin/components/Includes/Sidebar/AdminLeftBar";
import AdminHeader from "../../Admin/components/Includes/Header/AdminHeader";
import {useHistory} from "react-router-dom";
import { connect } from 'react-redux';
import { logoutUser } from "../../redux/actions/authActions";
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

    let history = useHistory();

    const [open, setOpen] = React.useState(true);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };
    const userLogout = e => {
        e.preventDefault();
        props.logoutUser();
        history.push('/admin/login');
    };

    return (
        <div>
            <div className={classes.appFrame}>
                <AdminLeftBar open={open} handleUserLogout={userLogout} userData={props.auth.user} />
                <AdminHeader handleDrawerToggle={handleDrawerToggle} handleUserLogout={userLogout} userData={props.auth.user} />
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
    theme: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logoutUser})(AdminLayout);
