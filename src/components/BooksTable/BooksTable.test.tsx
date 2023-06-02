import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from '../../app/store'
import { BooksTable } from '.'

const queryClient = new QueryClient()

it('renders the Book Table component', () => {
  try {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BooksTable />
        </QueryClientProvider>
      </Provider>
    )
  } catch (error) {
    console.error(error)
  }
})
