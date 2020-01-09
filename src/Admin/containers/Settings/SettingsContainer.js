import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SettingComponent from "./../../components/Setting/index";

class SettingsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {}
        };
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <SettingComponent />
            </div>
        );
    }
}

SettingsContainer.propTypes = {
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    ''
)(SettingsContainer);
