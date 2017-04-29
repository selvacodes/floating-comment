import { Jumbotron } from "react-bootstrap"
import React from "react"
import { connect } from "react-redux"

const Header = ({ header }) => (
  <Jumbotron>
    <h1> {header} </h1>
  </Jumbotron>
)

const mapStateToProps = state => ({
  header: state.header
})

const MainHeader = connect(mapStateToProps)(Header)

export default MainHeader
