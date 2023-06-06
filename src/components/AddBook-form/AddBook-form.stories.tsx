import { expect } from '@storybook/jest'
import { StoryFn, Meta } from '@storybook/react'
import AddBookForm from './AddBook-form'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Components/AddBookForm',
  component: AddBookForm,
} as Meta

const Template: StoryFn = (args) => {
  return (
    <BrowserRouter>
      <AddBookForm {...args} />
    </BrowserRouter>
  )
}

export const Default = Template.bind({})
Default.args = {}
Default.play = ({ canvasElement }) => {
  expect(canvasElement).toBeInTheDocument()
  expect(canvasElement.querySelector('form')).toBeInTheDocument()
  expect(canvasElement.querySelector('button')).toBeInTheDocument()
  expect(canvasElement.querySelector('button')).toHaveTextContent('Add Book')
  expect(canvasElement.querySelector('button')).toHaveAttribute(
    'type',
    'button'
  )
  expect(canvasElement.querySelector('button')).toHaveAttribute(
    'class',
    'bg-slate-700 text-white py-2 px-4 rounded transition-colors duration-300'
  )
  expect(canvasElement.querySelector('form')).toHaveAttribute(
    'class',
    'max-w-md mx-auto bg-slate-950 mt-10 text-sm shadow-md rounded-lg px-8 pt-6 pb-8 mb-4'
  )
}
