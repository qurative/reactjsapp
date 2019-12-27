import React, { Component } from "react";

const Dashboard = props => {
    const { loggedUser } = props;
    return (
        <div style={{ height: "75vh" }} className="container valign-wrapper">
            <div className="row">
                <div className="col s12 center-align">
                    <h4>
                        <b>Hey there,</b> {loggedUser.name}
                        <p className="flow-text grey-text text-darken-1">
                            You are logged into a full-stack{" "}
                            <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
                        </p>
                    </h4>
                    <button
                        style={{
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                        }}
                        onClick={props.handleLogoutClick}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
