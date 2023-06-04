import { configureStore } from '@reduxjs/toolkit'
import favoritesBookReducer from './favorites-book-reducer/favorites-book-reducer'
import { Book } from '../models'

export interface StoreReducer {
  favorites: Book[]
}

export const store = configureStore<StoreReducer>({
  reducer: {
    favorites: favoritesBookReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
