import { StoryFn, Meta } from '@storybook/react'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BooksTable } from './Book-table'
import { store } from '../../redux/store'
import { BrowserRouter } from 'react-router-dom'
import { expect } from '@storybook/jest'

export default {
  title: 'Components/BooksTable',
  component: BooksTable,
} as Meta

const queryClient = new QueryClient()

const Template: StoryFn = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <BooksTable />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
)

export const Default = Template.bind({})
Default.play = async ({ canvasElement, title, component }) => {
  expect(canvasElement).toBeInTheDocument
  expect(canvasElement).toBeVisible
  await expect(title).toBe('Components/BooksTable')
  await expect(component).toBeInTheDocument
}
