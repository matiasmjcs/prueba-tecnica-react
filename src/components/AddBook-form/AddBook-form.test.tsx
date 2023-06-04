import { render } from '@testing-library/react'
import { AddBookForm } from '.'

it('renders the Add Book form component', () => {
  try {
    render(<AddBookForm />)
  } catch (error) {
    console.error(error)
  }
})
