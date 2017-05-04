import { ADD_ITEM, OPEN_COMMENT , LOAD_ITEM } from "../actions"

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

export function loadItem(data) {
  return {
    type: LOAD_ITEM,
    data
  }
}
