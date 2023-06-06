import { BookDataResponse } from '.'
import { Character } from './ICharacter'

export interface GetAdapterInterface {
  bookListResponse(book: BookDataResponse[]): BookDataResponse[]
  bookResponse(book: BookDataResponse[]): BookDataResponse
  characterResponse(character: Character): Character
}
