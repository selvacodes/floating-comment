import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { Row, Well, Button } from "react-bootstrap"
import FloaterContent from "./Floater"

import { openCommentBox } from "../containers/Items/action_creators.js"
import { getItemsWithComments } from "../containers/Items/reducer"

const MyButton = styled(Button)`
   color: tomato;
   border-color: tomato;
 `

const Item = ({ id, text, showComments, openCommentBox, comments }) => (
  <Row>
    <Well>
      <h1> {text} </h1>
      <input type="text" />
      <MyButton onClick={_ => openCommentBox(id)}>+</MyButton>
    </Well>
    <FloaterContent showComments={showComments} comments={comments} />
  </Row>
)

const ItemsStructure = ({ items, openCommentBox }) => (
  <Row>
    {items.map(item => (
      <Item key={item.id} {...item} openCommentBox={openCommentBox} />
    ))}
  </Row>
)

const mapStateToProps = state => ({
  items: getItemsWithComments(state)
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openCommentBox: id => {
      dispatch(openCommentBox(id))
    }
  }
}
const Items = connect(mapStateToProps, mapDispatchToProps)(ItemsStructure)

export default Items
