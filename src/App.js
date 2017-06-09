import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Layout from './component/Layout'
class App extends Component {
  constructor() {
    super();
    this.state = { 'name': 'Will' };
  }
  render() {
    setTimeout(() => { this.setState({ 'name': 'Bill' }) }, 3000);
    const author = 'Fei';
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Layout author={author} year={1990}/>
        {/*<Header />*/}
        <p className="App-intro">
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        </p>
        <p> {this.state.name}</p>
        {/*<Footer />*/}
      </div>
          );
  }
}

export default App;
