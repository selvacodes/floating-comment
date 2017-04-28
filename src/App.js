import React, { Component } from 'react';
import logo from './logo.svg';
import MainHeader  from './components/MainHeader'
import './App.css'
import "bootstrap/dist/css/bootstrap.css";



class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader header="Selva"/>
      </div>
    );
  }
}

export default App;
