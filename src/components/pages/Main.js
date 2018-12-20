import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Home from "./Home";
import SearchManga from "./SearchManga";
import Login from "./Login";
import PrivateRoute from "../PrivateRoute";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
export const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/search-manga" component={SearchManga} />
    </Switch>
  </main>
);