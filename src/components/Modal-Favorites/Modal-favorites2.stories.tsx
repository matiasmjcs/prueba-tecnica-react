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
