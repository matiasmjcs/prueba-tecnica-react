import { render } from '@testing-library/react'
import { AddBookForm } from './AddBook-form'
import { BrowserRouter } from 'react-router-dom'

it('renders the Add Book form component', () => {
  render(
    <BrowserRouter>
      <AddBookForm />
    </BrowserRouter>
  )
})
