import { ADD_ITEM, OPEN_COMMENT } from "../actions"

export function addItem(shouldClose = true, text) {
  return {
    type: ADD_ITEM,
    text,
    shouldClose
  }
}

export function openCommentBox(id) {
  return {
    type: OPEN_COMMENT,
    id
  }
}
