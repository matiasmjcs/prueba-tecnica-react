import axios from 'axios'
import { BookAdapter } from '../../adapters/Book-adapter'

export const getBooks = async () => {
  try {
    const { data } = await axios.get(
      'https://www.anapioficeandfire.com/api/books?page=1&pageSize=12'
    )
    const BookAdapterInstance = new BookAdapter()
    return BookAdapterInstance.bookListResponse(data)
  } catch (e) {
    console.log('Ocurrio un error con los book')
  }
}
  
export const getBooksByName = async (name: string) => {
  try {
    const { data } = await axios.get(
      `https://www.anapioficeandfire.com/api/books?name=${name}`
    )
    const BookAdapterInstance = new BookAdapter()
    return BookAdapterInstance.bookResponse(data)
  } catch (e) {
    console.log('Ocurrio un error con los book')
  }
}
