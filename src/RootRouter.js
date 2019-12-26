import React from 'react';
import { Route } from "react-router-dom";

const RootRouter = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
        <Layout>
            <Component {...props} />
        </Layout>
    )} />
);

export default RootRouter;
