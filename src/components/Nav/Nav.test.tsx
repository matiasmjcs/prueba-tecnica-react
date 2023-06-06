import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Nav } from './Nav'

describe('Nav component', () => {
  test('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    )

    const homeLink = screen.getByText('Home')
    const favoritesLink = screen.getByText('Favorites')
    const addBookLink = screen.getByText('add Book')

    expect(homeLink).toBeInTheDocument()
    expect(favoritesLink).toBeInTheDocument()
    expect(addBookLink).toBeInTheDocument()
  })
})
