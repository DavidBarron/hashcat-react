import React, { Component } from 'react'
import Navigation from './navigation/Navigation'
import Upload from './upload/Upload'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="Card">
          <Upload />
        </div>
      </div>
    );
  }
}

export default App
