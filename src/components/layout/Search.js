import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => e.preventDefault();

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <div style={userSearch}>
            <input
              type="text"
              name="text"
              placeholder="Enter username"
              className="mg-rt"
              value={this.state.text}
              onChange={this.onChange}
            />

            <input
              type="submit"
              value="search"
              className="btn btn-dark btn-block"
            />
          </div>
        </form>
      </div>
    );
  }
}
const userSearch = {
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
};

export default Search;
