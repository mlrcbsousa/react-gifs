import React, { Component } from 'react';

class Gif extends Component {
// = ({ id, clickFunction }) => {
  // handleClick = event => clickFunction(event.target.src.split('/')[4]);
  constructor(props) {
    super(props);
    this.props = props;
  }

  shouldComponentUpdate(nextProps) {
    const { id } = this.props;
    return nextProps.id !== id;
  }

  render() {
    const { id, clickFunction } = this.props;
    const url = `https://media.giphy.com/media/${this.id}/giphy.gif`;
    // doesnt render component at page load
    if (!id) { return null; }
    return <img src={url} alt="" className="gif" onClick={e => clickFunction(e.target.src.split('/')[4])} />;
  }
}

export default Gif;
