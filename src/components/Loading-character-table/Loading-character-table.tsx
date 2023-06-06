import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
export const LoadingCharacterTable = (): JSX.Element => {
  return (
    <SkeletonTheme
      baseColor="rgb(168 162 158)"
      highlightColor="rgb(255 255 255)"
      borderRadius={10}
      height={20}
      width={90}
    >
      <section className="grid-rows-2 sm:w-full md:w-4/5 justify-items-center justify-start mb-10 overflow-auto wx-10">
        <article className="bg-slate-950 font-bold justify-start p-10 text-md w-full text-gray-100 rounded-2xl overflow-hidden">
          <div className="flex justify-around gap-5 mb-5 w-full">
            <div className=" grid items-start">
              <span className="px-4 py-6 text-start ">Name</span>
              <Skeleton count={4} className="my-3" />
            </div>
            <div className="grid items-start ">
              <span className="px-4 py-6 text-start">Gender</span>
              <Skeleton count={4} className="my-3" />
            </div>
            <div className="grid items-start">
              <span className="px-4 py-6 text-start">Books</span>
              <Skeleton count={4} className="my-3" />
            </div>
          </div>
        </article>
      </section>
    </SkeletonTheme>
  )
}
