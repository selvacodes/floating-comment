import { createStore, combineReducers } from "redux"
import itemReducer from "../containers/Items/reducer"
import addModalReducer from "../containers/AddItemModal/reducer"
import commentsReducer from "../containers/Comments/reducer"

export const rootReducer = combineReducers({
  items: itemReducer,
  showAddItemModal: addModalReducer,
  comments: commentsReducer
})

export let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
