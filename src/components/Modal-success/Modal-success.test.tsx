import { render } from '@testing-library/react'
import { ModalSuccess } from './Modal-success'

describe('ModalSuccess component', () => {
  it('renders the modal and triggers the close function when button is clicked', () => {
    const mockCloseModal = jest.fn()
    const mockIsOpen = true

    render(<ModalSuccess isOpen={mockIsOpen} closeModal={mockCloseModal} />)
  })
})
