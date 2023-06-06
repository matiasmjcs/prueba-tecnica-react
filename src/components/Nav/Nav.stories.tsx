import { BrowserRouter } from 'react-router-dom'
import { Nav } from './Nav'
import { StoryFn, Meta } from '@storybook/react'
export default {
  title: 'Components/Nav',
  component: Nav,
} as Meta

const Template: StoryFn = () => {
  return (
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  )
}

export const Default = Template.bind({})
