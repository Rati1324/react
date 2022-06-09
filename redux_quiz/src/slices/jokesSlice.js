import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

export const getJokes = createAsyncThunk("joke/getjoke", 
  async () => {
    return await fetch("https://icanhazdadjoke.com/search?limit=10&#39", {
      headers: {
          'Accept': 'application/json',
          'User-Agent': 'dad jokes',
      },
    }).then((res) => res.json());
})

export const jokesSlice = createSlice( {
  name: "users",
  initialState:{ value: [], loading: false, error: null, favs: []},
  reducers: {
    deleteJoke: (state, action) => {
      console.log("asdas")
      state.value.results = state.value.results.filter((j) => j.id !== action.payload);
    },
    deleteAll: (state, action) => {
      state.value.results = []
    },
    editJoke: (state, action) => {
      state.value.results.find(j => j.id === action.payload.id).joke = action.payload.input
    },
    addJoke: (state, action) => {
      state.value.results = [{id: nanoid(), joke: action.payload}, ...state.value.results]
    },
    addToFavs: (state, action) => {
      state.favs = [action.payload, ...state.favs]
    }
  },

  extraReducers: {
    [getJokes.pending]: (state, action) => {
      state.loading = true
    },
    [getJokes.fulfilled]: (state, action) => {
      state.loading = false;
      state.value = [action.payload]
    },
    [getJokes.fulfilled]: (state, action) => {
      state.loading = false;
      state.value = action.payload;
    }
  }
})

export const { deleteJoke, editJoke, addJoke, addToFavs, deleteAll } = jokesSlice.actions;
export default jokesSlice.reducer;