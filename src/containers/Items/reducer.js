//@flow

import { ADD_ITEM, CLOSE_MODAL, OPEN_MODAL, OPEN_COMMENT } from "./actions"
import { combineReducers  } from "react-redux"

type item = {
  id: number,
  text: string,
  showComments: boolean
}

type itemList = {
  items: Array<item>
}

type appState = {
  header: string,
  showAddItemModal: boolean,
  items: Array<items>
}

const initialState = {
  header: "Floating comments",
  showAddItemModal: false,
  items: [
    { id: 1, text: "First", showComments: false },
    { id: 2, text: "Second", showComments: false }
  ]
}

function itemReducer(state = initialState, action): appState {
  console.log(action)
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          { id: state.items.length + 1, text: action.text, showComments: false }
        ],
        showAddItemModal: false
      }
    case CLOSE_MODAL:
      return { ...state, showAddItemModal: false }

    case OPEN_MODAL:
      return { ...state, showAddItemModal: true }

    case OPEN_COMMENT:
      const newState = state.items.map(
        item =>
          (item.id === action.id ? { ...item, showComments: true } : item)
      )
      return { ...state, items: [...newState] }

    default:
      return state
  }
}

function addModalReducer(state = false,action) {
    case ADD_ITEM:
    case CLOSE_MODAL:
        return false
    case OPEN_MODAL:
        return true

}

const rootReducer = combineReducers({
        items : itemReducer,
        showAddItemModal : addModalReducer
})

export default itemReducer

export const getItems = state => state.items

export const getShowAddItemModel = state => state.showAddItemModal
