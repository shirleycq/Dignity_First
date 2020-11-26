import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import '../etc/css/routeitems.css';
import Dashboard from '../common/Dashboard.js';
import Application from '../containers/Application/Application';
import Registration from '../containers/Registration/Registration';
import Query from '../containers/Query/Query';

class RouterComponent extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="dignity-routeritem-outer">
        <div className="dignity-routeritem-inner">
          <Switch>
            <Route path="/" exact component={Dashboard}></Route>
            <Route path="/application" component={Application}></Route>
            <Route path="/registration" component={Registration}></Route>
            <Route path="/query" component={Query}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}


export default withRouter(RouterComponent);
