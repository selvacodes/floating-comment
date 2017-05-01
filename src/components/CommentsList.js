import React from "react"
import { connect } from "react-redux"
import { Row, Well } from "react-bootstrap"

import { getComments } from "../containers/Comments/reducer"

const Comment = ({ id, itemId, text }) => (
  <Row>
    <Well>
      {text}
    </Well>
  </Row>
)

const Comments = ({ comments }) => (
  <Row>
    {comments.map(cmt => <Comment key={cmt.id} {...cmt} />)}
  </Row>
)

const mapStateToProps = state => {
  return {
    comments: getComments(state)
  }
}

const CommentsList = connect(mapStateToProps)(Comments)

export default CommentsList
