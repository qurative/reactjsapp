import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../../redux/actions/authActions";
import DashboardComponent  from "../../../components/users/dashboard/Dashboard";

class DashboardContainer extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
        this.props.history.push('/login');
    };

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push("/login");
        }
    }
    render() {
        return (
            <DashboardComponent loggedUser={this.props.auth} handleLogoutClick={this.onLogoutClick} />
        );
    }
}
DashboardContainer.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(DashboardContainer);
