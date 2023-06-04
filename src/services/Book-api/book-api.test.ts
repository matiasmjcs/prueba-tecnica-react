import axios, { AxiosResponse } from 'axios'
import { getBooks } from './book-api'
import mockBookListResponse from './MockData.json'
import { Book } from '../../models'

// Mock axios para simular respuestas
jest.mock('axios')

describe('getBooks', () => {
  it('should return book list', async () => {
    axios.get = jest
      .fn()
      .mockResolvedValueOnce({ data: mockBookListResponse } as AxiosResponse)

    const result: Book[] | undefined = await getBooks()

    expect(result).toMatchObject<Book[]>(mockBookListResponse)
    expect(axios.get).toHaveBeenCalledWith(
      'https://www.anapioficeandfire.com/api/books?page=1&pageSize=12'
    )
  })
})
