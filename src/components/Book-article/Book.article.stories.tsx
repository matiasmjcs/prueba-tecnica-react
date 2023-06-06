import { StoryFn, Meta } from '@storybook/react'
import { BookArticle, Props } from './Book-article'
import { expect } from '@storybook/jest'

export default {
  title: 'Components/BookArticle',
  component: BookArticle,
} as Meta

const Template: StoryFn<Props> = (args) => <BookArticle {...args} />

export const Default = Template.bind({})
Default.args = {
  data: {
    name: 'Example Book',
    authors: 'John Doe',
    released: '2023-06-01T00:00:00.000Z',
    country: 'Example Country',
    publisher: 'Example Publisher',
    characters: [],
    url: 'https://example.com/book',
    isbn: '1234567890',
    numberOfPages: 250,
    mediaType: 'Paperback',
    povCharacters: [],
  },
}
Default.play = async ({ canvasElement }) => {
  expect(canvasElement).toBeInTheDocument
  await expect(canvasElement).toHaveTextContent('Example Book')
  await expect(canvasElement).toHaveTextContent('John Doe')
  await expect(canvasElement).toHaveTextContent('2023-06-01')
  await expect(canvasElement).toHaveTextContent('Example Country')
  await expect(canvasElement).toHaveTextContent('Example Publisher')
}
