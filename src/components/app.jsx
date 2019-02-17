import React, { Component } from 'react';
import giphy from 'giphy-api';

// internal
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedId: null,
      formFocus: false
    };
  }

  focus = () => {
    const { formFocus } = this.state;
    this.setState({ formFocus: !formFocus });
  }

  search = (query) => {
    giphy('uemh2Mpw1UsaXl78vTikOIWngrZnTfOz').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, response) => this.setState({ gifs: response.data }));
  }

  click = selectedId => this.setState({ selectedId });

  render() {
    const { formFocus, selectedId, gifs } = this.state;
    const classes = `left-scene${formFocus ? ' form-focus' : ''}`;
    return (
      <div>
        <div className={classes}>
          <SearchBar searchFunction={this.search} focusFunction={this.focus} />
          <div className="selected-gif">
            <Gif id={selectedId} clickFunction={this.click} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} clickFunction={this.click} />
        </div>
      </div>
    );
  }
}

export default App;
