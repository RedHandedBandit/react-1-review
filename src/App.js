import React, { Component } from 'react';
import './App.css';
// we are importing Search from this file path
// Don't forget to use the correct file path
// also, you will notice that this import statement is slightly different than the css import statement
import Search from './Components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* We are rendering the Search component in App.js*/}
      <Search />
      </div>
    );
  }
}

export default App;
