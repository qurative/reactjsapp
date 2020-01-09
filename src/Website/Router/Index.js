import React from 'react';
import { Switch } from 'react-router-dom';
import RootRouter from '../../RootRouter';

import AppLayout from "../../Layout/AppLayout";
import LoginLayout from "../../Layout/LoginLayout";
import DashboardLayout from "../../Layout/DashboardLayout";
import Home from "./../components/Home/Index";
import AboutUs from "./../components/Pages/AboutUs";
import LoginContainer from "./../containers/Auth/Login";
import RegisterContainer from "./../containers/Auth/Register";
import DashboardContainer from "./../containers/users/dashboard/Dashboard";

const WebRouter = (props) => {
    return (
        <>
            <RootRouter exact path="/" layout={AppLayout} component={Home} />
            <RootRouter exact path="/about" layout={AppLayout} component={AboutUs} />
            <RootRouter exact path="/login" layout={LoginLayout} component={LoginContainer} />
            <RootRouter exact path="/register" layout={AppLayout} component={RegisterContainer} />
            <RootRouter exact path="/users/dashboard" layout={DashboardLayout} component={DashboardContainer} />
        </>
    );
};

/*WebRouter.propTypes = {

};*/

export default WebRouter;