import React from "react"
import styled from "styled-components"
import { Well } from "react-bootstrap"

const Floater = styled.div`
   position: absolute;
   top: -100px;
   left: 450px;
 `
const FloaterParent = styled.div`
   position: relative;
   display: ${props => (props.showComments ? "block" : "none")}
 `

const FloaterContent = ({ showComments, comments }) => (
  <FloaterParent showComments={showComments}>
    <Floater>
      <Well>
        {comments.map(cmt => <p key={cmt.id}>{cmt.text}</p>)}
      </Well>
    </Floater>
  </FloaterParent>
)

export default FloaterContent
