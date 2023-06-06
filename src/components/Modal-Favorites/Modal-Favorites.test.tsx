import { render } from '@testing-library/react'
import { ModalFavorites } from './Modal-favorites'
import { StateModal } from '../../models'

describe('ModalFavorites component', () => {
  it('renders the alert message with the correct text and type', () => {
    const mockText = 'This is a success message'

    render(<ModalFavorites _type={StateModal.Success} text={mockText} />)
  })
})
