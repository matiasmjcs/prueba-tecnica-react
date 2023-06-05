import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export const LoadingBookTable = () => {
  return (
    <SkeletonTheme
      baseColor="rgb(168 162 158)"
      highlightColor="rgb(255 255 255)"
      borderRadius={10}
      height={20}
      width={90}
    >
      <section className=" flex sm:w-full md:w-4/5 justify-items-center justify-center m-0 pt-20 overflow-auto wx-10">
        <article className=" bg-slate-950 p-5 text-sm w-full text-gray-100  rounded-2xl overflow-hidden">
          <div className="flex justify-around gap-5 mb-5 w-full">
            <div className=" grid items-center">
              <span className="px-4 py-6 text-center ">Name</span>
              <Skeleton count={4} className="my-3" />
            </div>
            <div className="grid items-center ">
              <span className="px-4 py-6 text-center">Authors</span>
              <Skeleton count={4} className="my-3" />
            </div>
            <div className="grid items-center ">
              <span className="px-4 py-6 text-center">Released</span>
              <Skeleton count={4} className="my-3" />
            </div>
            <div className="grid items-center ">
              <span className="px-4 py-6 text-center">View</span>
              <Skeleton count={4} className="my-3" />
            </div>
            <div className="grid items-center ">
              <span className="px-4 py-6 text-center">Favorite</span>
              <Skeleton count={4} className="my-3" />
            </div>
          </div>
        </article>
      </section>
    </SkeletonTheme>
  )
}
