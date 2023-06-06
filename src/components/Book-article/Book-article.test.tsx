import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'
import { BookArticle } from './Book-article'
import { Book } from '../../models'

const queryClient = new QueryClient()

const MockData: Book = {
  url: 'https://example.com/book',
  name: 'Nombre del libro',
  isbn: '1234567890',
  authors: 'Autor 2',
  numberOfPages: 200,
  publisher: 'Editorial',
  country: 'País',
  mediaType: 'Tipo de medio',
  released: '2022-01-01',
  characters: ['Personaje 1', 'Personaje 2'],
  povCharacters: ['Personaje 1'],
}

it('renders Book article', async () => {
  jest.spyOn(axios, 'get').mockResolvedValueOnce({
    data: MockData,
  } as AxiosResponse)

  render(
    <QueryClientProvider client={queryClient}>
      <BookArticle data={MockData} />
    </QueryClientProvider>
  )
})
