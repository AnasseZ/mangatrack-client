import React from "react";
import { Title } from "../Title";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col align-self-center">
            <Title title="Dashboard" />
            <br />
            <br />
           Ici dashhhhhh 
          </div>
        </div>
      </div>
    );
  }
}
