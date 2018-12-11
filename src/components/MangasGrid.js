import React from "react";
import Manga from "./Manga";

export default class MangasGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      mangaSearched: this.props.mangaSearched,
      mangas: []
    };
  }

  componentDidMount() {
    fetch("https://localhost:8443/getMatchingByName/" + this.state.mangaSearched)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            mangas: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }



  render() {
    const { error, isLoaded, mangas } = this.state;
    if (error) {
      return <div id="white-text"> <i class="fas fa-exclamation-circle"></i> Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div><i id="loading-icon" className="fas fa-spinner fa-spin fa-2x"></i></div>;
    } else {
      return (
        <div className="row row-eq-height">
          {mangas.map((manga, index) => {
            return <Manga manga={manga} key={index} />;
          })}
        </div>
      );
    }
  }
}
