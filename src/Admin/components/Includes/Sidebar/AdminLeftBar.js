import React  from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import List from "@material-ui/core/List";
import {Button, Collapse, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import IconDashboard from '@material-ui/icons/Dashboard';
import IconSettings from '@material-ui/icons/Settings';
import IconPeople from '@material-ui/icons/People';
import IconBarChart from '@material-ui/icons/BarChart';
import IconLibraryBooks from '@material-ui/icons/LibraryBooks';
import LogoutIcon from '@material-ui/icons/ExitToApp';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawerPaper: {
        position: "fixed",
        width: drawerWidth,
        top: theme.spacing.unit * 8, // push content down to fix scrollbar position
        height: "calc(100% - " + 60 * 2 + "px)", // subtract appbar height
        background: '#535454',
        color: '#fff',
    },
    drawerContent: {
        overflow: "auto",
        display: "flex",
        flexDirection: "column"
    },
    drawerList: {
        width: '100%',
    },
    navList: {
        width: drawerWidth,
    },
    menuItem: {
        width: drawerWidth,
        '&.active': {
            background: 'rgba(0, 0, 0, 0.08)',
            '& .MuiListItemIcon-root': {
                color: '#fff',
            },
        },
    },
    menuItemIcon: {
        color: '#97c05c',
    },
    logoutContainer: {
        // marginTop: "auto",
        // paddingBottom: "0",
        position: "fixed",
        width: '241px',
        bottom: '-8px',
        background: '#535454',
    },
    logoutButton: {
        background: theme.palette.primary.light,
        color: '#fff',
        '&.hover': {
            background: theme.palette.primary.main
        },
    }
}));

const AdminLeftBar = (props) => {
    const classes = useStyles();
    const [subMenuOpen, setSubMenuOpen] = React.useState(false)

    function handleClick() {
        setSubMenuOpen(!subMenuOpen)
    }
    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={props.open}
            elevation={2}
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <div className={classes.drawerHeader} />
            <div className={classes.drawerContent}>
                <List className={classes.drawerList} style={{ flexGrow: 1 }}>
                    <ListItem
                        button
                        className={classes.menuItem}
                        component={Link}
                        to="/admin"
                    >
                        <ListItemIcon className={classes.menuItemIcon}>
                            <IconDashboard />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>

                    <ListItem button
                              className={classes.menuItem}
                              component={Link}
                              to="/admin/settings"
                    >
                        <ListItemIcon className={classes.menuItemIcon}>
                            <IconSettings />
                        </ListItemIcon>
                        <ListItemText primary="Manage Settings" />
                    </ListItem>

                    <ListItem button className={classes.menuItem}>
                        <ListItemIcon className={classes.menuItemIcon}>
                            <IconPeople />
                        </ListItemIcon>
                        <ListItemText primary="Customers" />
                    </ListItem>

                    <ListItem button className={classes.menuItem}>
                        <ListItemIcon className={classes.menuItemIcon}>
                            <IconBarChart />
                        </ListItemIcon>
                        <ListItemText primary="Reports" />
                    </ListItem>
                    <ListItem button onClick={handleClick} className={classes.menuItem}>
                        <ListItemIcon className={classes.menuItemIcon}>
                            <IconLibraryBooks />
                        </ListItemIcon>
                        <ListItemText primary="Nested Pages" />
                        {subMenuOpen ? <IconExpandLess /> : <IconExpandMore />}
                    </ListItem>
                    <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
                        <Divider />
                        <List component="div" disablePadding>
                            <ListItem button className={classes.menuItem}>
                                <ListItemText inset primary="Nested Page 1" />
                            </ListItem>
                            <ListItem button className={classes.menuItem}>
                                <ListItemText inset primary="Nested Page 2" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
                <List className={classes.logoutContainer}>
                    <Divider />
                    <ListItem
                        style={{
                            // borderBottom: "1px solid black",
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <Button className={classes.logoutButton} onClick={props.handleUserLogout}><LogoutIcon fontSize={"small"} /> Logout</Button>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    )
};

AdminLeftBar.propTypes = {
    open: PropTypes.bool.isRequired,
    handleUserLogout: PropTypes.func.isRequired,
    userData: PropTypes.object.isRequired,
};

export default AdminLeftBar;
