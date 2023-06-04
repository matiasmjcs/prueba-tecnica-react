import { createBrowserRouter } from 'react-router-dom'
import App from '../App.tsx'
import { AddBook } from '../pages/AddBook/AddBook.tsx'
import { Home } from '../pages/Home/Home.tsx'
import { Book } from '../pages/Book/Book.tsx'
import { Favorites } from '../pages/Favorites/Favorites.tsx'
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
      {
        path: '/add_book',
        element: <AddBook />,
      },
    ],
  },
])
