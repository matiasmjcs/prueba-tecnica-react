import { BooksTable } from "../components/BooksTable"

const Home = (): JSX.Element => {
  return (
    <div className="md:flex md:justify-center">
      <BooksTable />
    </div>
  )
}

export default Home