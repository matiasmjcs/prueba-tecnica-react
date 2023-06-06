import { LoadingBookArticle } from './Loading-book-article'
import { StoryFn, Meta } from '@storybook/react'
import { store } from '../../redux/store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { expect } from '@storybook/jest'

export default {
  title: 'Components/LoadingBookArticle',
  component: LoadingBookArticle,
} as Meta

const Template: StoryFn = () => (
  <Provider store={store}>
    <BrowserRouter>
      <LoadingBookArticle />
    </BrowserRouter>
  </Provider>
)

export const Default = Template.bind({})
Default.play = async ({ canvasElement, title, component }) => {
  expect(canvasElement).toBeInTheDocument
  await expect(title).toBe('Components/LoadingBookArticle')
  await expect(component).toBeInTheDocument
}
