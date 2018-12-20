import React from "react";

import { AuthConsumer } from "../../contexts/AuthContext";

import NavOnline from "./NavOnline";
import NavOffline from "./NavOffline";

export default () => (
  <AuthConsumer>
    {({ isAuth, login, logout }) =>
      isAuth ? <NavOnline logout={logout}/> : <NavOffline login={login}/>
    }
  </AuthConsumer>
);
