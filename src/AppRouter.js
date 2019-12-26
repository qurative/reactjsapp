import React from 'react';
import { Switch } from 'react-router-dom';

// import PrivateRoute from "./components/private-route/PrivateRoute";

import RootRouter from './RootRouter';
import AppLayout from "./Layout/AppLayout";
import Home from "./Website/components/Home/Index";
/*import AboutUs from "./components/Pages/AboutUs";
import LoginContainer from "./containers/Auth/Login";
import RegisterContainer from "./containers/Auth/Register";
import DashboardContainer from "./containers/users/dashboard/Dashboard";
import AdminLayout from "./components/Layout/Admin/AdminLayout";
import AdminLoginContainer from "./containers/Admin/Auth/AdminLoginContainer";
import AdminDashboardContainer from "./containers/Admin/Dashboard/AdminDashboardContainer";
import Page404 from "./components/Page404";
import LoginLayout from "./components/Layout/LoginLayout";
import AdminLoginLayout from "./components/Layout/Admin/AdminLoginLayout";*/

const AppRouter = () => (
    <div>
        <Switch>
            <RootRouter exact path="/" layout={AppLayout} component={Home} />
            {/*<RootRouter exact path="/about" layout={AppLayout} component={AboutUs} />
            <RootRouter exact path="/login" layout={LoginLayout} component={LoginContainer} />
            <RootRouter exact path="/register" layout={AppLayout} component={RegisterContainer} />
            <RootRouter exact path="/users/dashboard" layout={AppLayout} component={DashboardContainer} />

            <RootRouter exact path="/admin" layout={AdminLayout} component={AdminDashboardContainer} />
            <RootRouter exact path="/admin/login" layout={AdminLoginLayout} component={AdminLoginContainer} />
            <RootRouter exact path="*" layout={AppLayout} component={Page404} />*/}
        </Switch>
    </div>
);

export default AppRouter;
