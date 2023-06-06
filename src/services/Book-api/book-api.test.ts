import axios, { AxiosResponse } from 'axios'
import { Mockdata } from './MockData'

// Mock axios para simular respuestas
jest.mock('axios')

describe('getBooks', () => {
  it('should return book list', async () => {
    axios.get = jest
      .fn()
      .mockResolvedValueOnce({ data: Mockdata } as AxiosResponse)

    const response = await axios.get(
      'https://www.anapioficeandfire.com/api/books?page=1&pageSize=12'
    )

    expect(response.data).toEqual(Mockdata)
    expect(axios.get).toHaveBeenCalledWith(
      'https://www.anapioficeandfire.com/api/books?page=1&pageSize=12'
    )
  })
})
