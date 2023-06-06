import { FavoritesTable } from './Favorites-table'
import { StoryFn, Meta } from '@storybook/react'
import { store } from '../../redux/store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

export default {
  title: 'Components/FavoritesTable',
  component: FavoritesTable,
} as Meta

const Template: StoryFn = () => (
  <Provider store={store}>
    <BrowserRouter>
      <FavoritesTable />
    </BrowserRouter>
  </Provider>
)

export const Default = Template.bind({})
