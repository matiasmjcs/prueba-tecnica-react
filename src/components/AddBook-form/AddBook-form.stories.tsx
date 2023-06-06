import { StoryFn, Meta } from '@storybook/react'
import AddBookForm from './AddBook-form'

export default {
  title: 'Components/AddBookForm',
  component: AddBookForm,
} as Meta

const Template: StoryFn = (args) => <AddBookForm {...args} />

export const Default = Template.bind({})
Default.args = {}
