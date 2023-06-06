import { FavoritesTable } from '../../components/Favorites-table/Favorites-table'

export const Favorites = (): JSX.Element => {
  return (
    <div className="md:flex md:justify-center overflow-x-auto">
      <FavoritesTable />
    </div>
  )
}
