import React, { Component } from 'react';
import logo from './logo.svg';
import MainHeader  from './components/MainHeader'
import ItemGrid  from './components/ItemGrid'
import './App.css'
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader header="Selva"/>
        <ItemGrid/>
      </div>
    );
  }
}

export default App;
