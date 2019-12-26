import React from 'react';
import Header from "./../Website/components/Includes/Header/Index";
import Footer from "./../Website/components/Includes/Footer/Index";

const AppLayout = props => (
    <div>
        <Header/>
        {props.children}
        <Footer/>
    </div>
);

export default AppLayout;
