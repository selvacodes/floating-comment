import React from "react"
import { connect } from "react-redux"
import { Well, Button } from "react-bootstrap"

import { openModal } from "../containers/AddItemModal/action_creators"

const AddItem = ({ openModal }) => {
  return (
    <div>
      <Well>
        <Button onClick={openModal}>Add Item</Button>
      </Well>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openModal: text => {
      dispatch(openModal(true))
    }
  }
}
const AddItemSection = connect(_ => _, mapDispatchToProps)(AddItem)

export default AddItemSection
