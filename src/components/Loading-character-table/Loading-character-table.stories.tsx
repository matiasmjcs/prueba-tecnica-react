import { LoadingCharacterTable } from './Loading-character-table'
import { StoryFn, Meta } from '@storybook/react'
import { store } from '../../redux/store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { expect } from '@storybook/jest'

export default {
  title: 'Components/LoadingCharacterTable',
  component: LoadingCharacterTable,
} as Meta

const Template: StoryFn = () => (
  <Provider store={store}>
    <BrowserRouter>
      <LoadingCharacterTable />
    </BrowserRouter>
  </Provider>
)

export const Default = Template.bind({})
Default.play = async ({ canvasElement, title, component }) => {
  expect(canvasElement).toBeInTheDocument
  await expect(title).toBe('Components/LoadingCharacterTable')
  await expect(component).toBeInTheDocument
}
