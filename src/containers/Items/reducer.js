import { ADD_ITEM, OPEN_COMMENT } from "../actions"
import { initialState } from "../state"
import R from "ramda"

const containerState = initialState.items

function itemReducer(state = containerState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        { id: state.length + 1, text: action.text, showComments: false }
      ]

    case OPEN_COMMENT:
      const newState = state.map(
        item => (item.id === action.id ? { ...item, showComments: true } : item)
      )
      return [...newState]

    default:
      return state
  }
}

export default itemReducer

export const getItemsWithComments = state => {
  const items = R.prop("items")(state)
  const comments = R.prop("comments")(state)
  const itemsWithComments = items.map(item => {
    const commentForItem = comments.filter(cmt => cmt.itemId == item.id)
    return { ...item, comments: commentForItem }
  })
  return itemsWithComments
}
