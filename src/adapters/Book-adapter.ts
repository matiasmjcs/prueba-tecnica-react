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

  bookResponse([book]: Book[]): Book {
     const {
       url,
       isbn,
       name,
       numberOfPages,
       authors,
       country,
       publisher,
       released,
       mediaType,
       povCharacters,
       characters,
     } = book

     return {
       url,
       isbn,
       name,
       numberOfPages,
       authors,
       country,
       publisher,
       released,
       mediaType,
       povCharacters,
       characters,
     }
  }
}
