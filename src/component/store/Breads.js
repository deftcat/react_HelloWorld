import React, { Component } from 'react';
export default class Breads extends Component {
  constructor(){
    super();
    this.state = {
      favorite : 'Balic bread'
    }
  }
  changeFavorite(e){
    console.log('====================================')
    console.log(e)
    console.log('====================================')
    this.setState({favorite: e.target.value})
  }
  render() {
    return (
      <div>
        <p>This is breads</p>
        <input type='text' onChange={this.changeFavorite.bind(this)}/>
        {/*<Favorite />*/}
        <mark>{this.state.favorite}</mark>
      </div>
    )
  }
}
const Favorite = () => (
  <input type='text' onChange={this.changeFavorite.bind(this)}/>
);

