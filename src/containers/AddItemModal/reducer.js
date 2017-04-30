import { ADD_ITEM, CLOSE_MODAL, OPEN_MODAL } from "../actions"
import { initialState } from "../state"

const containerState = initialState.showAddItemModal

function addModalReducer(state = containerState, action) {
  switch (action.type) {
    case ADD_ITEM:
    case CLOSE_MODAL:
      return false

    case OPEN_MODAL:
      return true

    default:
      return state
  }
}

export default addModalReducer

export const getShowAddItemModel = state => state.showAddItemModal
