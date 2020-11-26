import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './etc/css/fonts.css';
import './etc/css/body.css';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import Header from './common/Header';
import Body from './common/Body';
import LoginPage from './containers/LoginPage';
import AuthRoute from './hoc/AuthenticateRoute';


class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.onTryAutoLogin();
  }

  render() {
    return (
      <div>
        <Header
          isAuthenticated={this.props.isAuthenticated}
          logout={this.props.onLogout}
        />

        <Switch>
          <Route path="/login" component={LoginPage} />

          <AuthRoute path="/" component={Body} />


        </Switch>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  const authReducer = state.get("authReducer");
  return {
    isAuthenticated: authReducer.get('isAuthenticated'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout()),
    onTryAutoLogin: () => dispatch(actions.checkAuthState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
