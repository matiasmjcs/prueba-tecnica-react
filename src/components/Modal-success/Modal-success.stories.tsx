import { ModalSuccess } from './Modal-success'
import { StoryFn, Meta } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Components/ModalSuccess',
  component: ModalSuccess,
} as Meta

const Template: StoryFn = () => {
  const [isOpen, setcloseModal] = useState(true)
  const closeModal = () => setcloseModal(false)
  if (!isOpen)
    return <button onClick={() => setcloseModal(true)}>open modal</button>
  return <ModalSuccess isOpen={isOpen} closeModal={closeModal} />
}

export const Default = Template.bind({})
