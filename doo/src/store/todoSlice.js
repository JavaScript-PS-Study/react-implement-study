import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoItem: {
    id: 0,
    todo: "",
    isCompleted: false,
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.todoItem.id = action.payload.id;
      state.todoItem.todo = action.payload.todo;
      state.todoItem.isCompleted = action.payload.isCompleted;
    },
    updateItem: (state, action) => {
      state.todoItem.id = action.payload.id;
      state.todoItem.todo = action.payload.todo;
      state.todoItem.isCompleted = action.payload.isCompleted;
    },
  },
});

export const { addItem, updateItem } = todoSlice.actions;
export default todoSlice.reducer;
