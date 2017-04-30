import React from "react"
import { Modal, Button } from "react-bootstrap"
import { connect } from "react-redux"

import { closeModal } from "../containers/AddItemModal/action_creators"
import { addItem } from "../containers/Items/action_creators"
import { getShowAddItemModel } from "../containers/AddItemModal/reducer"

class ItemModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: "" }
  }

  handleChange(e) {
    const val = e.target.value
    this.setState({ text: val })
  }

  addItem(_) {
    const itemText = this.state.text

    if (itemText) {
      this.props.submit(itemText)
      this.setState({ text: "" })
    }
  }

  render() {
    return (
      <div>
        <Modal show={this.props.showModal} bsSize="small">
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <input type="text" onChange={e => this.handleChange(e)} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={e => this.addItem(e)}>
              Add Item
            </Button>
            <Button onClick={e => this.props.closeBox(e)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  showModal: getShowAddItemModel(state)
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submit: text => {
      dispatch(addItem(false, text))
    },
    closeBox: _ => {
      dispatch(closeModal(false))
    }
  }
}
const AddItemModal = connect(mapStateToProps, mapDispatchToProps)(ItemModal)

export default AddItemModal
