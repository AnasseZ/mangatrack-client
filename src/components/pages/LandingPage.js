import React from "react";
import { Title } from "../Title";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col align-self-center">
            <Title title="Landing page" />
            <br />
            <br />
           Ici landing page 
          </div>
        </div>
      </div>
    );
  }
}
