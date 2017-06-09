import React, { Component } from 'react';

export default class Section extends Component {
  handleChange(event) {
    const value = event.target.value;
    console.log(value);
    this.props.changeSubtitle(value);
  }
  render() {

    // let https = 'https://jsonplaceholder.typicode.com/comments';
    return (
      <div>
        <input name='Subtitle' onChange={this.handleChange.bind(this)} />
        <section>the section</section>
      </div>
    );
  }
}


