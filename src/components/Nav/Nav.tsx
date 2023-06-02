import { NavLink } from "react-router-dom"

export const Nav = ():JSX.Element => {
    return (
      <nav>
        <NavLink to={'/'}>home</NavLink>
        <NavLink to={'/favorites'}>Favorites</NavLink>
        <NavLink to={'add_book'}>Agregar Book</NavLink>
      </nav>
    )
}