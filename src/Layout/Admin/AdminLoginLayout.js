import React  from 'react';
import {makeStyles} from "@material-ui/core";
import Image from "../../assets/img/login-bg.jpg";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${Image})`,
        // height: '672px',
        // padding: '1px'
        // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(${Image})`,
        opacity: 1,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
        left: 0,
        margin: 0,
        padding: 0,
        position: 'fixed',
        top: 0,
        transition: 'opacity 700ms',
        width: '100%'
    },
}));

const AdminLoginLayout = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {props.children}
        </div>
    );
}

export default AdminLoginLayout;
