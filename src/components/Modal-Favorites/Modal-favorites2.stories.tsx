import { expect } from '@storybook/jest'
import { ModalFavorites } from './Modal-favorites'
import { StoryFn, Meta } from '@storybook/react'
import { StateModal } from '../../models'

export default {
  title: 'Components/ModalFavoritesError',
  component: ModalFavorites,
} as Meta

const Template: StoryFn = () => (
  <ModalFavorites _type={StateModal.Error} text="Error" />
)

export const Default = Template.bind({})
Default.play = async ({ canvasElement, title, component }) => {
  expect(canvasElement).toBeInTheDocument
  await expect(title).toBe('Components/ModalFavoritesError')
  await expect(component).toBeInTheDocument
}
