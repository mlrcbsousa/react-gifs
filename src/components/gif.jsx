import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    this.props.clickFunction(event.target.src.split('/')[4]);
  }

  render() {
    const link = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={link} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
