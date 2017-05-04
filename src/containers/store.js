import { createStore, combineReducers,applyMiddleware } from "redux"
import { fork } from 'redux-saga/effects'
import itemReducer from "../containers/Items/reducer"
import addModalReducer from "../containers/AddItemModal/reducer"
import commentsReducer from "../containers/Comments/reducer"
import counterReducer from "../containers/Counter/reducer"
import runTimer from "../containers/Counter/saga"
import loadItems from "../containers/Items/saga"
import createSagaMiddleware from 'redux-saga'

function* rootSaga() {
  yield[
    fork(loadItems),
    fork(runTimer)
  ];
}

export const rootReducer = combineReducers({
  items: itemReducer,
  showAddItemModal: addModalReducer,
  comments: commentsReducer,
  counter: counterReducer
})

const sagaMiddleware = createSagaMiddleware()
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore)

export let store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

sagaMiddleware.run(rootSaga)