import { BookDataResponse } from '../models'
import { Character } from '../models/ICharacter'
import { GetAdapterInterface } from '../models/IGetAdapter'

export class GetAdapter implements GetAdapterInterface {
  bookListResponse(response: BookDataResponse[]): BookDataResponse[] {
    return response.map((book: BookDataResponse) => ({
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

  bookResponse([book]: BookDataResponse[]): BookDataResponse {
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
  characterResponse(character: Character): Character {
    return character
  }
}
