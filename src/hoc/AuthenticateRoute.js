import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthenticateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
        {...rest}
        render={props => isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />}
    />
)


const mapStateToProps = (state) => {
    const authReducer = state.get("authReducer");
    return {
        isAuthenticated: authReducer.get("isAuthenticated"),
    }
}

export default connect(mapStateToProps, null)(AuthenticateRoute);