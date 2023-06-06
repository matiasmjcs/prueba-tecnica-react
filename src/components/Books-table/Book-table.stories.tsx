import { StoryFn, Meta } from '@storybook/react'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BooksTable } from './Book-table'
import { store } from '../../redux/store'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Components/BooksTable',
  component: BooksTable,
} as Meta

const queryClient = new QueryClient() // Crear una instancia de QueryClient

const Template: StoryFn = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <BooksTable />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
)

export const Default = Template.bind({})
