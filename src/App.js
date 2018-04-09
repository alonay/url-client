import React, { Component } from 'react'
import './App.css'
import logo from './logo.svg'
import Maker from "./maker"
import LeaderBoard from "./leaderBoard"

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <h1 className="App-title">When Life Gives You Long Links, Make Short Links!</h1>
        <Maker/>
        <LeaderBoard/>
      </div>
    )
  }
}

export default App;
