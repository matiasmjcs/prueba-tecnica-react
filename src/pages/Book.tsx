import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getBooksByName } from '../services/Book-api'
import { Characters } from '../components/Characters'

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
    <section className="w-full h-full flex gap-10 items-center align-center  flex-col">
      <article className="p-0 m-0 text-white bg-slate-950 mt-10 flex  pl-5 pr-5 py-5 w-4/5 h-full min-h-150 rounded-lg h-4/5 h-auto flex-col flex-wrap">
        <h1 className="flex justify-center mb-5 font-bold">{data?.name ?? ''}</h1>
        <div className="grid grid-cols-2 grid-rows-3 gap-5">
          <p>authors: {data?.authors}</p>
          <p>released: {data?.released.split('T')[0]}</p>
          <p>country: {data?.country}</p>
          <p>publisher: {data?.publisher}</p>
          <p>characters: {data?.characters.length}</p>
        </div>
      </article>
        {data && <Characters data={data.characters}/>}
    </section>
  )
}
export default Book