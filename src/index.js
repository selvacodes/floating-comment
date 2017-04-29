import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"

import itemReducer from "./containers/Items/reducer"

import App from "./App"
import "./index.css"

let store = createStore(
  itemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
