import { Book } from '../../models'

interface Props {
  data: Book
}

export const BookArticle = ({ data }: Props): JSX.Element => {
  return (
    <article className="p-0 m-0 text-white bg-slate-950 mt-10 flex  pl-5 pr-5 py-5 w-4/5 h-full min-h-150 rounded-lg h-4/5 h-auto flex-col flex-wrap">
      <h1 className="flex justify-center mb-5 font-bold">{data?.name}</h1>
      <hr />
      <br />
      <div className="grid grid-cols-2 grid-rows-3 gap-5">
        <p>
          Authors:
          <br />
          <span className="text-sm text-zinc-400">{data?.authors}</span>
        </p>
        <p>
          Released:
          <br />{' '}
          <span className="text-sm text-zinc-400">
            {data?.released.split('T')[0]}
          </span>
        </p>
        <p>
          Country:
          <br /> <span className="text-sm text-zinc-400">{data?.country}</span>
        </p>
        <p>
          Publisher:
          <br />{' '}
          <span className="text-sm text-zinc-400">{data?.publisher}</span>
        </p>
        <p>
          Characters:
          <br />{' '}
          <span className="text-sm text-zinc-400">
            {data?.characters.length}
          </span>
        </p>
      </div>
    </article>
  )
}
