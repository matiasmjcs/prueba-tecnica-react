import { ModalFavorites } from './Modal-favorites'
import { StoryFn, Meta } from '@storybook/react'
import { StateModal } from '../../models'
import { expect } from '@storybook/jest'

export default {
  title: 'Components/ModalFavorites',
  component: ModalFavorites,
} as Meta

const Template: StoryFn = () => (
  <ModalFavorites _type={StateModal.Success} text="Suceess" />
)

export const Default = Template.bind({})
Default.play = async ({ canvasElement, title, component }) => {
  expect(canvasElement).toBeInTheDocument
  await expect(title).toBe('Components/ModalFavorites')
  await expect(component).toBeInTheDocument
}
