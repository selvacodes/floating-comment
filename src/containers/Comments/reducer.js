import { initialState } from "../state"

const containerState = initialState.comments

function commentsReducer(state = containerState, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default commentsReducer

export const getComments = state => state.comments
