import React, { Component } from 'react';
import {makeStyles} from "@material-ui/core";
import AdminHeader from "../../Admin/components/Includes/Header/AdminHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: '50px'
    },
}));
const AppLayout = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AdminHeader/>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>
        </div>
    );
};
export default AppLayout;
