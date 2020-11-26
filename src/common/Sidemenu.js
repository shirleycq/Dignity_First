import React, { Component } from 'react';
import '../etc/css/sidemenu.css';
import DashboardIcon from '../etc/images/Dashboard icon.svg';
import ApplicationIcon from '../etc/images/Application_icon.svg';
import RegistrationIcon from '../etc/images/Registration_icon.svg';
import QueriesIcon from '../etc/images/Queries_icon.svg';
import { Link, withRouter } from 'react-router-dom';

class Sidemenu extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="sidemenu">
        <div className="sidemenu-items-outer">
          <div className="sidemenu-frame">
            <label for="side-toggle"></label>
            <input type="checkbox" id="side-toggle" className="side-menu-checkbox visually-hidden" />
            <div className="side-items-outer">
              <Link className="sidemenu-item active" to="/">
                <div className="sidemenu-item-inner">
                  <div className="sidemenu-item-img dashboard-icon">
                    <img src={DashboardIcon} alt="Dashboard Icon" />
                  </div>
                  <div className="sidemenu-item-text">
                    DASHBOARD
                  </div>
                </div>
              </Link>
              <Link className="sidemenu-item" to="/application">
                <div className="sidemenu-item-inner">
                  <div className="sidemenu-item-img application-icon">
                    <img src={ApplicationIcon} alt="Application Icon" />
                  </div>
                  <div className="sidemenu-item-text">
                    APPLICATIONS
                  </div>
                </div>
              </Link>
              <Link className="sidemenu-item" to="/registration">
                <div className="sidemenu-item-inner">
                  <div className="sidemenu-item-img registration-icon">
                    <img src={RegistrationIcon} alt="Registration icon" />
                  </div>
                  <div className="sidemenu-item-text">
                    REGISTRATION
                   </div>
                </div>
              </Link>
              <Link className="sidemenu-item" to="/query">
                <div className="sidemenu-item-inner">
                  <div className="sidemenu-item-img queries-icon">
                    <img src={QueriesIcon} alt="Queries Icon" />
                  </div>
                  <div className="sidemenu-item-text">
                    QUERIES
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(Sidemenu);
