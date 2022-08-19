import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  favQuote : [],
  myQuote : [],
}

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
     setFav : (state, action) => {
    state.favQuote = [...state.favQuote, action.payload];
    },
    setMyQuote : (state, action) => {
    state.myQuote = [...state.myQuote, action.payload];
    },
  },
})

export const { setFav, setMyQuote } = quoteSlice.actions

export default quoteSlice.reducer