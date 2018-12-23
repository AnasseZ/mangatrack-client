import React from "react";
import Manga from "./Manga";
import AlertC from "./AlertC";
import { AuthConsumer } from "../contexts/AuthContext";

export default class MangasGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      mangaSearched: this.props.mangaSearched,
      mangas: [],
      alertContent: null
    };
  }

  componentDidMount() {
    fetch(this.props.apiRoot + "getMatchingByName/" + this.state.mangaSearched)
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

  setAlertContent(param) {
    this.setState({
      alertContent: param
    });
  }

  render() {
    const { error, isLoaded, mangas } = this.state;
    if (error) {
      return (
        <div id="white-text">
          {" "}
          <i class="fas fa-exclamation-circle" /> Error: {error.message}
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div>
          <i id="loading-icon" className="fas fa-spinner fa-spin fa-2x" />
        </div>
      );
    } else {
      return (
        <>
          <AlertC information={this.state.alertContent} />
          <div className="row row-eq-height">
            {mangas.map((manga, index) => {
              return (
                <AuthConsumer>
                  { ({ apiRoot}) =>
                    <Manga
                    manga={manga}
                    key={index}
                    callback={this.setAlertContent.bind(this)}
                  />
                  }
                  
                </AuthConsumer>
              );
            })}
          </div>
        </>
      );
    }
  }
}
