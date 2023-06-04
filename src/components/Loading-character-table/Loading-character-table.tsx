import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export const LoadingCharacterTable = (): JSX.Element => {
  return (
    <SkeletonTheme
      baseColor="#0F1728"
      highlightColor="#020617"
      borderRadius={10}
      height={25}
      width={90}
    >
      <section className="grid-rows-2 sm:w-full md:w-4/5 justify-items-center justify-center mb-10 overflow-auto wx-10">
        <article className="bg-slate-950 font-bold p-10 text-md w-full text-gray-100 rounded-2xl overflow-hidden">
          <div className="flex justify-around gap-5 mb-5 w-full">
            <div className=" grid items-center">
              <span className="px-4 py-6 text-center ">Name</span>
              <Skeleton count={4} className="my-3" />
            </div>
            <div className="grid items-center ">
              <span className="px-4 py-6 text-center">Gender</span>
              <Skeleton count={4} className="my-3" />
            </div>
            <div className="grid items-center">
              <span className="px-4 py-6 text-center">Books</span>
              <Skeleton count={4} className="my-3" />
            </div>
          </div>
        </article>
      </section>
    </SkeletonTheme>
  )
}
