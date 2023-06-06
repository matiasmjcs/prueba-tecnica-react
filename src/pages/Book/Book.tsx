import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getBooksByName } from '../../services/Book-api'
import { CharactersTable } from '../../components/Characters-table/Characters-table'
import { BookArticle } from '../../components/Book-article/Book-article'
import { LoadingBookArticle } from '../../components/Loading-book-article/Loading-book-article'

export const Book = () => {
  const params = useParams()

  const getBooks = async () => {
    const data = await getBooksByName(params.name ?? '')
    return data
  }

  const { data, isLoading } = useQuery({
    queryKey: [params.name],
    queryFn: getBooks,
  })

  if (isLoading)
    return (
      <div className="flex justify-center">
        <LoadingBookArticle />
      </div>
    )
  return (
    <section className="w-full h-full flex gap-10 items-center align-center  flex-col">
      {data && <BookArticle data={data} />}
      {data && (
        <>
          <h2 className="text-white font-bold text-lg text-center w-full">
            Characters
          </h2>
          <div className="w-full overflow-x-auto flex justify-center">
            <CharactersTable data={data.characters} />
          </div>
        </>
      )}
    </section>
  )
}
