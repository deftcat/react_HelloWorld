import React, { Component } from 'react';
export default class Breads extends Component {
  constructor() {
    super();
    this.state = {
      favorite: 'Balic bread'
    }
  }
  changeFavorite(e) {
    this.setState({ favorite: e.target.value })
  }
  render() {
    return (
      <div>
        <p>This is my favorite bread: <mark>{this.state.favorite}</mark></p>
        <label>Stander input w. same level</label>
        <input type='text' onChange={this.changeFavorite.bind(this)} />
        <br />
        <label>From children and bind the change event</label>
        <Favorite update={this.changeFavorite.bind(this)} />
      </div>
    )
  }
}
const Favorite = (props) => (
  <input type='text' onChange={props.update} />
);

