import React, { Component } from "react"

import MainHeader from "./components/MainHeader"
import ItemGrid from "./components/ItemGrid"
import AddItemModal from "./components/AddItemModal"
import AddItemSection from "./components/AddItemSection"

import "./App.css"
import "bootstrap/dist/css/bootstrap.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <AddItemSection />
        <ItemGrid />
        <AddItemModal />
      </div>
    )
  }
}

export default App
