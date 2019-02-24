import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.props = props;
    // may want to add for `Controlled Component`, any input, select or w/e
    this.state = { term: '' };
  }

  // // can use this if not controlled component
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  // handleFocus() { this.focusFunction(); }
  // handleChange({ target }) {  }
  handleChange = ({ target }) => {
    this.setState({ term: target.value });

    const { searchFunction } = this.props;
    searchFunction(target.value);
  };


  render() {
    const { focusFunction } = this.props;
    const { term } = this.state;
    return (
      <input
        type="text"
        className="form-control form-search"
        value={term}
        onChange={this.handleChange}
        onFocus={focusFunction}
        onBlur={focusFunction}
      />
    );
  }
}

// const SearchBar = () => {
// };

export default SearchBar;
