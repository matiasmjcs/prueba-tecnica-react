import { createBrowserRouter } from 'react-router-dom'
import App from '../App.tsx'
import Home from '../pages/Home.tsx'
import Book from '../pages/Book.tsx'
import Favorites from '../pages/Favorites.tsx'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/book/:name',
        element: <Book />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
    ],
  },
])
