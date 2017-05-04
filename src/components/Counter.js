import { Well } from "react-bootstrap"
import React from "react"
import { connect } from "react-redux"

import { getCounter } from "../containers/Counter/reducer"

const Counter = ({ counter }) => (
  <Well>
    <h1> {counter} </h1>
  </Well>
)

const mapStateToProps = state => ({
  counter: getCounter(state)
})

const MainCounter = connect(mapStateToProps)(Counter)

export default MainCounter
