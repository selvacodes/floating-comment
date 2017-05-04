import { COUNTER_INCREASE } from "../actions"
import { initialState } from "../state"

const containerState = initialState.counter

function counterReducer(state = containerState, action) {
  switch (action.type) {
    case COUNTER_INCREASE:
     return state + 1
    default:
      return state
  }
}

export default counterReducer

export const getCounter = state => state.counter
