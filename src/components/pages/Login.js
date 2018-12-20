import React from "react";

import { AuthConsumer } from "../../contexts/AuthContext";

export default class Login extends React.Component {
  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };

    return (
      <AuthConsumer>
        {({ login, isAuth }) =>
          isAuth ? (
            <div>Déjà connecté</div>
          ) : (
            <div>
              <p>You must log in to view the page at {from.pathname}</p>
              <button onClick={login}>Log in</button>
            </div>
          )
        }
      </AuthConsumer>
    );
  }
}
