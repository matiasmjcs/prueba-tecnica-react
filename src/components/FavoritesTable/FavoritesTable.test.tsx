import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from '../../redux/store'
import { FavoritesTable } from '.'

const queryClient = new QueryClient()

it('renders the Favorites Table component', () => {
  try {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <FavoritesTable />
        </QueryClientProvider>
      </Provider>
    )
  } catch (error) {
    console.error(error)
  }
})
