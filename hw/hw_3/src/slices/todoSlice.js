import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {data: [], finished: false, status: "idle"};

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async () => {
    return await fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json());
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: {initialState},
  reducers: {
    addTodo: (state, action) => {
      state.data = [action.payload, ...state.data]
    },
    toggleTodo: (state, action) => {
      state.data.find((t) => t.id === action.payload.id).finished = action.payload.toggle;
    },
    editTodo: (state, action) => {
      state.data.find((t) => t.id === action.payload.id).title = action.payload.title;
    },
    deleteTodo: (state, action) => {
        state.data = state.data.filter((t) => t.id !== action.payload);
    },
    deleteAll: (state) => {
      state.data = [];
      state.status = "idle";
    }
  },
  extraReducers: {
    [getTodos.pending]: (state) => {
      state.status = "loading";
    },
    [getTodos.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
    [getTodos.rejected]: (state) => {
      state.status = "failed";
    },
  }
})

export const { toggleTodo, deleteAll, deleteTodo, editTodo, addTodo } = todoSlice.actions;
export default todoSlice.reducer;