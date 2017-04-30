import { ADD_ITEM, CLOSE_MODAL, OPEN_MODAL, OPEN_COMMENT } from "./actions"

export function addItem(shouldClose = true, text) {
  return {
    type: ADD_ITEM,
    text,
    shouldClose
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

export function openModal() {
  return {
    type: OPEN_MODAL
  }
}

export function openCommentBox(id) {
  return {
    type: OPEN_COMMENT,
    id
  }
}
