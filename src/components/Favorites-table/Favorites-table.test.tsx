import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import { FavoritesTable } from './Favorites-table'

describe('FavoritesTable component', () => {
  it('renders the table with correct headers', () => {
    render(
      <Provider store={store}>
        <FavoritesTable />
      </Provider>
    )
  })
})
