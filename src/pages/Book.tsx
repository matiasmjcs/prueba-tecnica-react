import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getBooksByName } from '../services/book-api'

const Book = () => {
    const params = useParams()

    const getBooks = async () => {
        const data = await getBooksByName(params.name ?? '')
        return data
    }

    const { data, isLoading } = useQuery({
      queryKey: [params.name],
      queryFn: getBooks,
    })

    if (isLoading) return <div>Loading ...</div>
    return (
        <div>
            <h1>{data?.name ?? ''}</h1>
        </div>
    )
}
export default Book