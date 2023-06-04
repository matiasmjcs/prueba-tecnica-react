import axios from 'axios'
import { GetAdapter } from '../../adapters/Get-adapter'

export const getCharacter = async (date: string) => {
  try {
    const { data } = await axios.get(date)
    const GetAdapterInstance = new GetAdapter()
    return GetAdapterInstance.characterResponse(data)
  } catch (e) {
    console.log('Ocurrio un error con los book')
  }
}
