import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AdminDashboard from "./../../components/Dashboard/index";

class AdminDashboardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push("/admin/login");
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <AdminDashboard />
            </div>
        );
    }
}

AdminDashboardContainer.propTypes = {
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    ''
)(AdminDashboardContainer);
