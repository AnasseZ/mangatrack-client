import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="https://i.pinimg.com/originals/0d/8d/07/0d8d07a763e83f93acf810ae2c523bd7.png" alt="logo" id="logo"/>
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  Chercher un manga
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                Se connecter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;