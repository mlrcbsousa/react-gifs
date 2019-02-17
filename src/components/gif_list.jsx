import React, { Component } from 'react';

// internal
import Gif from './gif.jsx';

class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map((gif) => {
      return <Gif id={gif.id} key={gif.id} clickFunction={this.props.clickFunction} />;
    });
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
