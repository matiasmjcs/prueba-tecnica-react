import axios from 'axios'
import { GetAdapter } from '../../adapters/Get-adapter'
import { GetInterceptors } from '../../interceptors/Get-interceptors'

export const getBooks = async () => {
  try {
    const { data } = await axios.get(
      'https://www.anapioficeandfire.com/api/books?page=1&pageSize=12'
    )
    const GetAdapterInstance = new GetAdapter()
    const adapterData = GetAdapterInstance.bookListResponse(data)
    const GetInterceptorInstance = new GetInterceptors()
    return GetInterceptorInstance.GetBooksResponse(adapterData)
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
    const adapterData = GetAdapterInstance.bookResponse(data)
    const GetInterceptorInstance = new GetInterceptors()
    return GetInterceptorInstance.GetBookResponse(adapterData)
  } catch (e) {
    console.log('Ocurrio un error con los book')
  }
}
