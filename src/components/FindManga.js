import React from "react";
import MangasGrid from "./MangasGrid";

export class FindManga extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        value: "",
        load: false,
        manga: "",
     };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = () => {
    this.setState({
        load: true,
        manga: this.state.value
    });
  };

  handleChange(evt) {
    this.setState({
        load: false,
        value: evt.target.value,
    });
  }

  render() {
    return (
      <div>
        <div className="form-inline">
          <input
            value={this.state.value}
            type="text"
            className="form-control"
            id="mangaSearch"
            placeholder="Chercher un manga"
            onChange={this.handleChange}
          />
          <button
            type="submit"
            className="btn btn-primary ml-2"
            onClick={this.handleClick}
          >
            Chercher
          </button>
        </div>
        <br />
        {       
            this.state.load  ?  <MangasGrid mangaSearched={this.state.manga}/> : ''
        }      
      </div>
    );
  }
}
