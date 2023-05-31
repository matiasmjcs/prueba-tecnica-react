import { useQuery } from '@tanstack/react-query'
import { getBooks } from '../services/book-api'
import { NavLink } from 'react-router-dom'
import { Book } from '../models'

const Home = (): JSX.Element => {
  const { data, isLoading } = useQuery({
    queryKey: ['Books'],
    queryFn: getBooks,
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      {data?.map((book: Book) => (
        <NavLink key={book.isbn} to={`/book/${book.name}`.toLowerCase()}>
          <div>{book.name}</div>
        </NavLink>
      ))}
    </div>
  )
}

export default Home
