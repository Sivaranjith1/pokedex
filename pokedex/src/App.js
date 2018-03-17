import React, { Component } from 'react';
import './App.css';
import PokeList from './Components/pokemonList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokeList />
      </div>
    );
  }
}

export default App;
