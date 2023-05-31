import { Book } from '../models'
import { BookAdapterInterface } from '../models/IBook-adapter'

export class BookAdapter implements BookAdapterInterface {
  bookListResponse(response: Book[]): Book[] {
    return response.map((book: Book) => ({
      url: book.url,
      isbn: book.isbn,
      name: book.name,
      numberOfPages: book.numberOfPages,
      authors: book.authors,
      country: book.country,
      publisher: book.publisher,
      released: book.released,
      mediaType: book.mediaType,
      povCharacters: book.povCharacters,
      characters: book.characters,
    }))
  }

  bookResponse(response :Book[]): Book {
    return {
      url: response[0].url,
      isbn: response[0].isbn,
      name: response[0].name,
      numberOfPages: response[0].numberOfPages,
      authors: response[0].authors,
      country: response[0].country,
      publisher: response[0].publisher,
      released: response[0].released,
      mediaType: response[0].mediaType,
      povCharacters: response[0].povCharacters,
      characters: response[0].characters,
    }
  }
}
