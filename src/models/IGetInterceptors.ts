import { Book, BookDataResponse, Character } from '.'

export interface GetInterceptorsInterface {
  GetBooksResponse(book: BookDataResponse[]): Book[]
  GetBookResponse(book: BookDataResponse): Book
  GetCharacterResponse(character: Character): Character
}
