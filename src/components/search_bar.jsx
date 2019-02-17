import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = event => this.props.searchFunction(event.target.value);

  handleFocus = () => this.props.focusFunction();

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleFocus}
      />
    );
  }
}

export default SearchBar;
