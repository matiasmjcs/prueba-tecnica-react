// import { BooksTable } from '../../components/Books-table'
import { BooksTable } from '../../components/Books-table/Book-table'
import { motion } from 'framer-motion'
export const Home = (): JSX.Element => {
  return (
    <motion.div layout className="md:flex md:justify-center overflow-x-auto">
      <BooksTable />
    </motion.div>
  )
}
