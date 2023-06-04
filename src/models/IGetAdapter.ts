import { Book } from '.'
import { Character } from './ICharacter'

export interface GetAdapterInterface {
  bookListResponse(book: Book[]): Book[]
  bookResponse(book: Book[]): Book
  characterResponse(character: Character): Character
}
