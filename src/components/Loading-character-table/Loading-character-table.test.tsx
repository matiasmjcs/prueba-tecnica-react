import { render } from '@testing-library/react'
import { LoadingCharacterTable } from './Loading-character-table'

describe('LoadingBookTable component', () => {
  it('renders the loading skeleton', () => {
    render(<LoadingCharacterTable />)
  })
})
