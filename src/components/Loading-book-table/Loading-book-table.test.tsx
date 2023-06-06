import { render } from '@testing-library/react'
import { LoadingBookTable } from './Loading-book-table'

describe('LoadingBookTable component', () => {
  it('renders the loading skeleton', () => {
    render(<LoadingBookTable />)
  })
})
