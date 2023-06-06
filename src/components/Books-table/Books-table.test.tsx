import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from '../../redux/store'
import { BooksTable } from './Book-table'

const queryClient = new QueryClient()

describe('BooksTable', () => {
  it('renders BoosTable', () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BooksTable />
        </QueryClientProvider>
      </Provider>
    )
  })
})
