import { Book, BookDataResponse, Character } from '../models'
import { GetInterceptorsInterface } from '../models/IGetInterceptors'

export class GetInterceptors implements GetInterceptorsInterface {
  GetBooksResponse(book: BookDataResponse[]): Book[] {
    return book.map((book: BookDataResponse) => ({
      url: book.url,
      isbn: book.isbn,
      name: book.name,
      numberOfPages: book.numberOfPages,
      authors: book.authors.join(','),
      country: book.country,
      publisher: book.publisher,
      released: book.released,
      mediaType: book.mediaType,
      povCharacters: book.povCharacters,
      characters: book.characters,
    }))
  }
  GetBookResponse(book: BookDataResponse): Book {
    const {
      url,
      isbn,
      name,
      numberOfPages,
      authors: authorsBefore,
      country,
      publisher,
      released,
      mediaType,
      povCharacters,
      characters,
    } = book
    const authors: string = authorsBefore.join(',')

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

  GetCharacterResponse(character: Character): Character {
    const {
      aliases,
      allegiances,
      books,
      born,
      culture,
      died,
      father,
      gender,
      mother,
      name: nameBefore,
      playedBy,
      povBooks,
      spouse,
      titles,
      tvSeries,
      url,
    } = character
    let name = nameBefore
    if (name.length === 0 || name === 'undefined') name = 'Name empy'
    return {
      aliases,
      allegiances,
      books,
      born,
      culture,
      died,
      father,
      gender,
      mother,
      name,
      playedBy,
      povBooks,
      spouse,
      titles,
      tvSeries,
      url,
    }
  }
}
