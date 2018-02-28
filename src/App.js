import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1> Hey there {this.props.name} </h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          It is tea time...
        </p>
        <p> {this.props.name} is {this.props.age} old. He or she likes
         {this.props.favourites} </p>
        <p>{this.props.favourites[0]}, {this.props.favourites[1]}, {this.props.favourites[2]} and {this.props.favourites[3]}</p>

      </div>
    );
  }
}

export default Hello;
