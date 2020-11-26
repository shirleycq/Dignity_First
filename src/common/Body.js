import React, { Component } from 'react';
import Sidemenu from '../common/Sidemenu.js';
import RouterComponent from '../common/Router.js';
class Body extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="dignity-body">
        <div className="dignity-background"></div>
        <div className="dignity-content-outer">
          <div className="dignity-content-table">
            <div className="dignity-content-middle">
              <div className="dignity-content-inner">
                <Sidemenu></Sidemenu>
                <RouterComponent></RouterComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Body;
