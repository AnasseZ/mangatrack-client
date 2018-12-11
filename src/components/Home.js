import React from "react";
import { FindManga } from "./FindManga";

export default class Home extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <h1>Manga</h1>
          <FindManga />
        </div>
      </header>
    );
  }
}
