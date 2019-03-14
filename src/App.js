import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>City tours</h1>
      </div>
    );
  }
}

export default App;
