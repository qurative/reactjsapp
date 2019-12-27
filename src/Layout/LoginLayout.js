import React  from 'react';
import Header from "./../Website/components/Includes/Header/Index";

const LoginLayout = props => (
    <div>
        <Header />
        {props.children}
    </div>
);

export default LoginLayout;
