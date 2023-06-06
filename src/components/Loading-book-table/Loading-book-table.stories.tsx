import { LoadingBookTable } from './Loading-book-table'
import { StoryFn, Meta } from '@storybook/react'
import { store } from '../../redux/store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

export default {
  title: 'Components/LoadingBookTable',
  component: LoadingBookTable,
} as Meta

const Template: StoryFn = () => (
  <Provider store={store}>
    <BrowserRouter>
      <LoadingBookTable />
    </BrowserRouter>
  </Provider>
)

export const Default = Template.bind({})
