import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './App';
import registerServiceWorker from './registerServiceWorker';

var person = {
  name: "Warbler",
  age: 55,
  favourites: [
    " Cucumber",
    " Pickles",
    " Cacti",
    " Porcupines"
  ]
}

ReactDOM.render(
  <Hello
    name={person.name}
    age={person.age}
    favourites={person.favourites}/>,
  document.getElementById('root'));
registerServiceWorker();
