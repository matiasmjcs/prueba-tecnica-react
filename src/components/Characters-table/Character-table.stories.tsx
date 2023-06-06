import { StoryFn, Meta } from '@storybook/react'
import { CharactersTable, Props } from './Characters-table'
import { store } from '../../redux/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

export default {
  title: 'Components/CharactersTable',
  component: CharactersTable,
} as Meta

const queryClient = new QueryClient()

const Template: StoryFn<Props> = (args) => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CharactersTable {...args} />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
)

export const Default = Template.bind({})
Default.args = {
  data: [
    'https://anapioficeandfire.com/api/characters/2',
    'https://anapioficeandfire.com/api/characters/12',
    'https://anapioficeandfire.com/api/characters/13',
    'https://anapioficeandfire.com/api/characters/16',
    'https://anapioficeandfire.com/api/characters/20',
    'https://anapioficeandfire.com/api/characters/27',
    'https://anapioficeandfire.com/api/characters/31',
    'https://anapioficeandfire.com/api/characters/38',
    'https://anapioficeandfire.com/api/characters/39',
    'https://anapioficeandfire.com/api/characters/40',
    'https://anapioficeandfire.com/api/characters/41',
  ],
}
