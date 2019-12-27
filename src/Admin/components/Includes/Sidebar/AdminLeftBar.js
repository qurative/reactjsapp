import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import styles from './sidebar-jss';
import AdminMenu from "./AdminMenu";

class AdminLeftBar extends React.Component {
    state = {
        anchor: 'left'
    };

    render() {
        const { anchor } = this.state;
        const {
            classes,
            open,
            toggleDrawerOpen,
            loadTransition,
            turnDarker
        } = this.props;
        return (
            <Fragment>
                <Hidden lgUp>
                    <SwipeableDrawer
                        onClose={toggleDrawerOpen}
                        onOpen={toggleDrawerOpen}
                        open={!open}
                        anchor={anchor}
                    >
                        <AdminMenu
                            drawerPaper
                            toggleDrawerOpen={toggleDrawerOpen}
                            loadTransition={loadTransition}
                        />
                    </SwipeableDrawer>
                </Hidden>
                <Hidden mdDown>
                    <Drawer
                        variant="permanent"
                        onClose={toggleDrawerOpen}
                        classes={{
                            paper: classNames(classes.drawer, classes.drawerPaper, !open ? classes.drawerPaperClose : ''),
                        }}
                        open={open}
                        anchor={anchor}
                    >
                        <AdminMenu
                            drawerPaper={open}
                            turnDarker={turnDarker}
                            loadTransition={loadTransition}
                        />
                    </Drawer>
                </Hidden>
            </Fragment>
        );
    }
}

AdminLeftBar.propTypes = {
    classes: PropTypes.object.isRequired,
    toggleDrawerOpen: PropTypes.func.isRequired,
    loadTransition: PropTypes.func.isRequired,
    turnDarker: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
};

export default withStyles(styles)(AdminLeftBar);
