//@flow

import { ADD_ITEM, CLOSE_MODAL, OPEN_MODAL, OPEN_COMMENT } from "./actions"

type item = {
  id: string,
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
    { text: "First", showComments: false },
    { text: "Second", showComments: false }
  ]
}

function itemReducer(state = initialState, action): appState {
  console.log(action)
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { text: action.text }],
        showAddItemModal: false
      }
    case CLOSE_MODAL:
      return { ...state, showAddItemModal: false }

    case OPEN_MODAL:
      return { ...state, showAddItemModal: true }

    case OPEN_COMMENT:
      const selectedItem = state.items.filter(i => i.text === action.text)
      const otherItems = state.items.filter(i => i.text !== action.text)
      const changedItems = selectedItem.map(item => ({
        ...item,
        showComments: true
      }))
      return { ...state, items: [...changedItems, ...otherItems] }

    default:
      console.log(action)
      return state
  }
}

export default itemReducer

export const getItems = state => state.items

export const getShowAddItemModel = state => state.showAddItemModal
