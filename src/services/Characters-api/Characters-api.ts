import axios from 'axios'
import { GetAdapter } from '../../adapters/Get-adapter'
import { GetInterceptors } from '../../interceptors/Get-interceptors'

export const getCharacter = async (date: string) => {
  try {
    const { data } = await axios.get(date)
    const GetAdapterInstance = new GetAdapter()
    const dataAdapter = GetAdapterInstance.characterResponse(data)
    const GetInterceptorInstance = new GetInterceptors()
    return GetInterceptorInstance.GetCharacterResponse(dataAdapter)
  } catch (e) {
    console.log('Ocurrio un error con los book')
  }
}
