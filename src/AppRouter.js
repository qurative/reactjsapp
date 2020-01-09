import React from 'react';
import { Switch } from 'react-router-dom';

// import PrivateRoute from "./components/private-route/PrivateRoute";

import RootRouter from './RootRouter';
import AppLayout from "./Layout/AppLayout";
import Home from "./Website/components/Home/Index";
import AboutUs from "./Website/components/Pages/AboutUs";
import LoginContainer from "./Website/containers/Auth/Login";
import RegisterContainer from "./Website/containers/Auth/Register";
import DashboardContainer from "./Website/containers/users/dashboard/Dashboard";
import Page404 from "./Website/components/Page404";
import LoginLayout from "./Layout/LoginLayout";
import DashboardLayout from "./Layout/DashboardLayout";
import AdminLayout from "./Layout/Admin/AdminLayout";
import AdminLoginContainer from "./Admin/containers/Auth/AdminLoginContainer";
import AdminDashboardContainer from "./Admin/containers/Dashboard/AdminDashboardContainer";
import SettingsContainer from "./Admin/containers/Settings/SettingsContainer";

import AdminLoginLayout from "./Layout/Admin/AdminLoginLayout";

const AppRouter = () => (
    <div>
        <Switch>
            <RootRouter exact path="/" layout={AppLayout} component={Home} />
            <RootRouter exact path="/about" layout={AppLayout} component={AboutUs} />
            <RootRouter exact path="/login" layout={LoginLayout} component={LoginContainer} />
            <RootRouter exact path="/register" layout={AppLayout} component={RegisterContainer} />
            <RootRouter exact path="/users/dashboard" layout={DashboardLayout} component={DashboardContainer} />

            <RootRouter exact path="/admin" layout={AdminLayout} component={AdminDashboardContainer} />
            <RootRouter exact path="/admin/login" layout={AdminLoginLayout} component={AdminLoginContainer} />
            <RootRouter exact path="/admin/settings" layout={AdminLayout} component={SettingsContainer} />

            <RootRouter exact path="*" layout={AppLayout} component={Page404} />
        </Switch>
    </div>
);

export default AppRouter;
