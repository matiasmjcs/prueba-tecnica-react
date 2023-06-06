import { ModalFavorites } from './Modal-favorites'
import { StoryFn, Meta } from '@storybook/react'
import { StateModal } from '../../models'

export default {
  title: 'Components/ModalFavorites',
  component: ModalFavorites,
} as Meta

const Template: StoryFn = () => (
  <ModalFavorites _type={StateModal.Success} text="Suceess" />
)

export const Default = Template.bind({})
