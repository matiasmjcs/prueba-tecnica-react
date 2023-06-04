import { NavLink } from 'react-router-dom'

export const Nav = (): JSX.Element => {
  return (
    <nav className="pl-5 prose-slate w-full bg-slate-950 text-white h-16 flex flex-row flex-auto gap-10 justify-start items-center">
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/favorites'}>Favorites</NavLink>
      <NavLink to={'add_book'}>add Book</NavLink>
    </nav>
  )
}
