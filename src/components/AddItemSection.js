import { Well, Button } from "react-bootstrap"
import React from "react"
import { connect } from "react-redux"
import { openModal } from "../containers/Items/action_creators.js"

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
const AddItemSection = connect(() => {}, mapDispatchToProps)(AddItem)

export default AddItemSection
