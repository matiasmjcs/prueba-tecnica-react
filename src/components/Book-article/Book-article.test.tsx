import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MockData from './MockBook.json'
import axios, { AxiosResponse } from 'axios'
import { BookArticle } from '.'

const queryClient = new QueryClient()

it('renders Book article', async () => {
  jest.spyOn(axios, 'get').mockResolvedValueOnce({
    data: MockData,
  } as AxiosResponse)

  render(
    <QueryClientProvider client={queryClient}>
      {MockData && <BookArticle data={MockData} />}
    </QueryClientProvider>
  )
})
