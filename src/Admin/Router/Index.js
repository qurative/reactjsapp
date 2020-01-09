import React from 'react';
import { Switch } from 'react-router-dom';
import RootRouter from '../../RootRouter';

import AdminLayout from "./../../Layout/Admin/AdminLayout";
import AppLayout from "./../../Layout/AppLayout";
import AdminLoginContainer from "./../../Admin/containers/Auth/AdminLoginContainer";
import AdminDashboardContainer from "./../../Admin/containers/Dashboard/AdminDashboardContainer";
import AdminLoginLayout from "./../../Layout/Admin/AdminLoginLayout";
import SettingsContainer from "../containers/Settings/SettingsContainer";

import Page404 from '../../Website/components/Page404';

const AdminRouter = (props) => {

    return (
        <>
            <Switch>
                <RootRouter exact path="/admin" layout={AdminLayout} component={AdminDashboardContainer} />
                <RootRouter exact path="/admin/settings" layout={AdminLayout} component={SettingsContainer} />

                <RootRouter exact path="/admin/login" layout={AdminLoginLayout} component={AdminLoginContainer} />

                <RootRouter exact path="*" layout={AppLayout} component={Page404} />
            </Switch>
        </>
    );
};

AdminRouter.propTypes = {

};

export default AdminRouter;