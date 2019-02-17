import React, { Component } from 'react';
import giphy from 'giphy-api';

// internal
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedId: "xT9IgDEI1iZyb2wqo8",
      formFocus: false
    };
  }

  focus = () => {
    this.setState({ formFocus: !this.state.formFocus });
  }

  search = (query) => {
    giphy('uemh2Mpw1UsaXl78vTikOIWngrZnTfOz').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, response) => this.setState({ gifs: response.data }));
  }

  click = (selectedId) => {
    this.setState({ selectedId });
  }

  render() {
    const classes = `left-scene${this.state.formFocus ? ' form-focus' : ''}`;
    return (
      <div>
        <div className={classes}>
          <SearchBar searchFunction={this.search} focusFunction={this.focus} />
          <div className="selected-gif">
            <Gif id={this.state.selectedId} clickFunction={this.click} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} clickFunction={this.click} />
        </div>
      </div>
    );
  }
}

export default App;
