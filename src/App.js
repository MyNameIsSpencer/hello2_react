import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  constructor(props) {
    super();
    this.state = {
      moodPoints:0
    }
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
        <p className="happiness"> On a 10 point scale, you are THIS HAPPY:</p>
        <p className="happiness"> {this.state.moodPoints} </p>

      <style>{`.happiness {
               color: deepskyblue;
               font-size: 25px;
             } `}</style>

      </div>
    );
  }
}

export default Hello;
