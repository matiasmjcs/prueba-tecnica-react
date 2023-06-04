import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MockCharacter from './MockCharacters-url.json'
import axios, { AxiosResponse } from 'axios'
import { CharactersTable } from '.'

const queryClient = new QueryClient()

it('renders Character Table', async () => {
  jest.spyOn(axios, 'get').mockResolvedValueOnce({
    data: MockCharacter,
  } as AxiosResponse)

  render(
    <QueryClientProvider client={queryClient}>
      {MockCharacter && <CharactersTable data={MockCharacter} />}
    </QueryClientProvider>
  )
})
