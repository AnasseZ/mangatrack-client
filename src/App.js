import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/pages/Main";

import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
