import { MouseEventHandler } from 'react'

export interface BookDataResponse {
  url: string
  name: string
  isbn: string
  authors: string[]
  numberOfPages: number
  publisher: string
  country: string
  mediaType: string
  released: string
  characters: string[]
  povCharacters: string[]
}

type BookDataResponseFormated = Omit<BookDataResponse, 'authors'>

export interface Book extends BookDataResponseFormated {
  authors: string
}

export interface BookTable extends Book {
  view?: string
  favorite?: () => MouseEventHandler<HTMLButtonElement> | undefined
  removeFavorite?: () => MouseEventHandler<HTMLButtonElement> | undefined
}
