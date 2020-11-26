import React, { Component } from 'react';
import '../etc/css/header.css';
// import dignityLogo from '../etc/images/dignity-logo.jpg';
import dignityLogo from '../etc/images/missionAuLogo.svg';
import profilePic from '../etc/images/images.png';
import { Button } from 'reactstrap';

class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="header">
        <div className="header-frame">
          <div className="logo">
            <img src={dignityLogo} className="img-logo screen-only " />
          </div>
          <input type="checkbox" id="header-checkbox" className="header-checkbox" alt="Dignity Logo" />
          <label for="header-checkbox" className="nav-icon">
            <span></span>
            <span></span>
            <span></span>
          </label>

          <div className="header-right-section">
            <div className="header-right-inline">
              <div className="header-menu">
                <ul>
                  <li className="device-only">
                    <img src={dignityLogo} className="img-logo " alt="Dignity Logo" />
                  </li>
                  <li>
                    <a href="">HOME</a>
                  </li>
                  <li>
                    <a href="">ABOUT US</a>
                  </li>
                  <li>
                    <a href="">PARTNERSHIP</a>
                  </li>
                  <li>
                    <a href="">CONTACT US</a>
                  </li>
                </ul>
                <div className="profile screen-only-inline-block">
                  <img src={profilePic} alt="Profile Picture" />
                  {this.props.isAuthenticated && <Button outline color="danger" className="ml-4" onClick={this.props.logout}>LOGOUT</Button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Header;
