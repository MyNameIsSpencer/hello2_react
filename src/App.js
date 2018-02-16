import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1> Hey there Warld </h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          It is tea time...
        </p>

      </div>
    );
  }
}

export default Hello;
