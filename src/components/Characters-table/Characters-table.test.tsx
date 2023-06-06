import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'
import { CharactersTable } from './Characters-table'

const queryClient = new QueryClient()

const MockCharacter = [
  'https://anapioficeandfire.com/api/characters/784',
  'https://anapioficeandfire.com/api/characters/786',
  'https://anapioficeandfire.com/api/characters/797',
  'https://anapioficeandfire.com/api/characters/805',
  'https://anapioficeandfire.com/api/characters/806',
  'https://anapioficeandfire.com/api/characters/814',
  'https://anapioficeandfire.com/api/characters/815',
  'https://anapioficeandfire.com/api/characters/820',
  'https://anapioficeandfire.com/api/characters/823',
  'https://anapioficeandfire.com/api/characters/827',
  'https://anapioficeandfire.com/api/characters/828',
  'https://anapioficeandfire.com/api/characters/829',
  'https://anapioficeandfire.com/api/characters/832',
  'https://anapioficeandfire.com/api/characters/837',
  'https://anapioficeandfire.com/api/characters/844',
]

it('renders Character Table', async () => {
  jest.spyOn(axios, 'get').mockResolvedValueOnce({
    data: MockCharacter,
  } as AxiosResponse)

  render(
    <QueryClientProvider client={queryClient}>
      <CharactersTable data={MockCharacter} />
    </QueryClientProvider>
  )
})
