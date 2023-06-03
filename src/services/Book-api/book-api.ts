import axios from 'axios'
import { GetAdapter } from '../../adapters/Get-adapter'

export const getBooks = async () => {
  try {
    const { data } = await axios.get(
      'https://www.anapioficeandfire.com/api/books?page=1&pageSize=12'
    )
    const GetAdapterInstance = new GetAdapter()
    return GetAdapterInstance.bookListResponse(data)
  } catch (e) {
    console.log('Ocurrio un error con los book')
  }
}
  
export const getBooksByName = async (name: string) => {
  try {
    const { data } = await axios.get(
      `https://www.anapioficeandfire.com/api/books?name=${name}`
    )
    const GetAdapterInstance = new GetAdapter()
    return GetAdapterInstance.bookResponse(data)
  } catch (e) {
    console.log('Ocurrio un error con los book')
  }
}
