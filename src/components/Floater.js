import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

import { Row, Well } from "react-bootstrap"
import { getItems } from "../containers/Items/reducer"

const Floater = styled.div`
   position: absolute;
   top: -100px;
   left: 450px;
 `
const FloaterParent = styled.div`
   position: relative;
   display: ${props => (props.showComments ? "block" : "none")}
 `

const FloaterContent = ({ showComments }) => (
  <FloaterParent showComments={showComments}>
    <Floater>
      <Well>
        <p>test</p>
      </Well>
    </Floater>
  </FloaterParent>
)

//const mapStateToProps = state => ({
//items: getItems(state)
//})

//const Items = connect(mapStateToProps)(ItemsStructure)

export default FloaterContent
