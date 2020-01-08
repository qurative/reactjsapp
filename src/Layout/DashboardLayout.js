import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppSideBar from "../Website/components/Includes/Sidebar/Index";
import DashHeader from "../Website/components/Includes/Header/DashHeader";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
}));

const DashboardLayout = (props) => {
    const classes = useStyles();
    const { loggedUser } = props;
    const [open, setOpen] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <DashHeader open={open} handleDrawerOpen={handleDrawerOpen} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
            <AppSideBar handleDrawerClose={handleDrawerClose} open={open}/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                {props.children}
            </main>
        </div>
    );
};

export default DashboardLayout;
