import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Maker from "./maker"
class App extends Component {
  getLinks = () => {
    fetch('http://localhost:3000/links')
       .then(res => res.json())
       .then(json => console.log(json))

   }
  render() {
    {this.getLinks()}
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Maker/>
      </div>
    );
  }
}

export default App;
