import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { Button, Form, FormGroup, Input } from "reactstrap";

class NavOffline extends Component {
  constructor(props) {
    super(props);

    this.toggleLoginPopin = this.toggleLoginPopin.bind(this);
    this.toggleSignInPopin = this.toggleSignInPopin.bind(this);
    this.state = {
      loginPopoverOpen: false,
      signInPopoverOpen: false
    };
  }

  toggleLoginPopin() {
    this.setState({
      loginPopoverOpen: !this.state.loginPopoverOpen
    });
  }

  toggleSignInPopin() {
    this.setState({
      signInPopoverOpen: !this.state.signInPopoverOpen
    });
  }

  register() {

  }

  loginCheck() {

  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://i.pinimg.com/originals/0d/8d/07/0d8d07a763e83f93acf810ae2c523bd7.png"
              alt="logo"
              id="logo"
            />
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
                <Link className="nav-link" to="/">
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Button
                  outline
                  color="info"
                  id="bntLogin"
                  onClick={this.toggleLoginPopin}
                >
                  Se connecter
                </Button>
                <Popover
                  placement="bottom"
                  isOpen={this.state.loginPopoverOpen}
                  target="bntLogin"
                  toggle={this.toggleLoginPopin}
                >
                  <PopoverHeader>Connexion</PopoverHeader>
                  <PopoverBody>
                    <h6 style={{ color: "black" }}>
                      Renseignez vos identifiants
                    </h6>
                    <Form>
                      <FormGroup>
                      <Input
                            type="text"
                            name="username"
                            id="usernameLogin"
                            placeholder="Nom d'utilisateur"
                          />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          type="password"
                          name="password"
                          id="passLogin"
                          placeholder="Mot de passe"
                        />
                      </FormGroup>
                      <Button id="btnFormLogin" color="info">
                        Se connecter
                      </Button>
                    </Form>
                    <hr />
                    Pas de compte ? <a href="/" onClick={() => {this.toggleLoginPopin(); this.toggleSignInPopin()}}>S'inscrire.</a>
                  </PopoverBody>
                </Popover>
              </li>
              <li className="nav-item">
                <Button color="info" id="btnSignIn" onClick={this.toggleSignInPopin}>
                  S'inscrire
                </Button>
                <Popover
                  placement="bottom"
                  isOpen={this.state.signInPopoverOpen}
                  target="btnSignIn"
                  toggle={this.toggleSignInPopin}
                >
                  <PopoverHeader>Inscription</PopoverHeader>
                  <PopoverBody>
                    <h6 style={{ color: "black" }}>Ajoutez vos informations</h6>
                    <Form>
                      <FormGroup>
                        <FormGroup>
                          <Input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Nom d'utilisateur"
                          />
                        </FormGroup>
                        <Input
                          type="email"
                          name="email"
                          id="emailLogin"
                          placeholder="E-mail"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          type="password"
                          name="password"
                          id="passLogin"
                          placeholder="Mot de passe"
                        />
                      </FormGroup>
                      <Button id="btnFormLogin" color="info">
                        Se connecter
                      </Button>
                    </Form>
                    <hr />
                    Vous avez déjà un compte ? <a href="/" onClick={() => {this.toggleSignInPopin(); this.toggleLoginPopin()}}>Se connecter</a>
                  </PopoverBody>
                </Popover>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavOffline;
