import React from "react";
import { FindManga } from "../FindManga";
import { Title } from "../Title";

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col align-self-center">
            <Title title="Accueil" />
            <br />
            <br />
           Ici
          </div>
        </div>
      </div>
    );
  }
}
