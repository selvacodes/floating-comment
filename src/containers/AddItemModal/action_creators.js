import { CLOSE_MODAL, OPEN_MODAL } from "../actions"

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

