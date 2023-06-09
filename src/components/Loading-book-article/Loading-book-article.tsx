import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { motion } from 'framer-motion'

export const LoadingBookArticle = () => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      className="p-0 m-0 text-white bg-slate-950 mt-10 flex  pl-5 pr-5 py-5 w-4/5 min-h-150 rounded-lg h-auto flex-col flex-wrap"
    >
      <SkeletonTheme
        baseColor="rgb(180 180 180)"
        highlightColor="rgb(255 255 255)"
        borderRadius={10}
        height={20}
        width={90}
      >
        <h1 className="flex justify-center mb-5 font-bold">
          <Skeleton width={230} height={15} />
        </h1>
        <hr />
        <br />
        <div className="grid grid-cols-2 grid-rows-3 gap-5">
          <p>
            Authors:
            <br />
            <span className="text-sm text-zinc-400">
              <Skeleton />
            </span>
          </p>
          <p>
            Released:
            <br />{' '}
            <span className="text-sm text-zinc-400">
              <Skeleton />
            </span>
          </p>
          <p>
            Country:
            <br />{' '}
            <span className="text-sm text-zinc-400">
              <Skeleton />
            </span>
          </p>
          <p>
            Publisher:
            <br />{' '}
            <span className="text-sm text-zinc-400">
              <Skeleton />
            </span>
          </p>
          <p>
            Characters:
            <br />{' '}
            <span className="text-sm text-zinc-400">
              <Skeleton />
            </span>
          </p>
        </div>
      </SkeletonTheme>
    </motion.article>
  )
}
