import { BooksTable } from '../../components/Books-table'

export const Home = (): JSX.Element => {
  return (
    <div className="md:flex md:justify-center">
      <BooksTable />
    </div>
  )
}
