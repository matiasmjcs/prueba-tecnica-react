import { render } from '@testing-library/react'
import { LoadingBookArticle } from './Loading-book-article'

describe('LoadingBookArticle component', () => {
  it('renders the loading skeleton', () => {
    render(<LoadingBookArticle />)
  })
})
