import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Book } from '../../models'

const initialState: Book[] = []

export const favoriteBook = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state: Book[], action: PayloadAction<Book>) => {
      const bookToAdd = action.payload
      const isBookInFavorites = state.some(
        (book) => book.name === bookToAdd.name
      )
      if (!isBookInFavorites) {
        state.push(bookToAdd)
      }
    },
    removeFavorites: (state: Book[], action: PayloadAction<Book>) => {
      const bookToRemove = action.payload
      state = state.filter((book) => book.name !== bookToRemove.name)
      return state
    },
    formatedFavorites: () => {
      initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFavorites, removeFavorites, formatedFavorites } =
  favoriteBook.actions

export default favoriteBook.reducer
