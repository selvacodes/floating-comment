export const initialState = {
  header: "Floating comments",
  showAddItemModal: false,
  items: [
    { id: 1, text: "First", showComments: false },
    { id: 2, text: "Second", showComments: false }
  ],
  comments: [
    { id: 1, itemId: 1, text: "Hello First" },
    { id: 2, itemId: 1, text: "Hello First - two" },
    { id: 3, itemId: 2, text: "Hello Second" }
  ],
  counter : 1
}
