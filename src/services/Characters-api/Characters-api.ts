import axios from 'axios'

export const getCharacter = async (date: string) => {
  try {
      const { data } = await axios.get(date)
      return data
    }
   catch (e) {
    console.log('Ocurrio un error con los book')
  }
}
