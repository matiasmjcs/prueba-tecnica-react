import { useFormik } from 'formik'
import * as Yup from 'yup'

export const AddBookForm: React.FC = () => {
  const initial = {
    title: '',
    author: '',
    genre: '',
    publicationDate: '',
  }

  const validation = () => {
    return {
      title: Yup.string().required('El Titulo es obligatorio'),
      author: Yup.string().required('El author es obligatorio'),
      genre: Yup.string().required('El Genero es obligatorio'),
      publicationDate: Yup.date(),
    }
  }

  const formik = useFormik({
    initialValues: initial,
    validationSchema: Yup.object(validation()),
    onSubmit: (data) => {
      console.log(data.title)
      console.log(data.author)
      console.log(data.genre)
      console.log(data.publicationDate)
    },
  })

  return (
    <form className="max-w-md mx-auto bg-slate-950 mt-10 text-sm shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl text-gray-200 font-bold mb-6">
        Crear nuevo libro
      </h2>
      <div className="mb-4">
        <label
          className="block text-start text-white text-sm font-bold mb-2"
          htmlFor="title"
        >
          Título
        </label>
        <p className="text-white text-start ">{formik.errors.title}</p>
        <input
          type="text"
          id="title"
          className="w-full px-3 py-2 bg-slate-900 rounded focus:outline-none focus:border-blue-500"
          onChange={(e) => formik.setFieldValue('title', e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-start text-white text-sm font-bold mb-2"
          htmlFor="author"
        >
          Autor
        </label>
        <p className="text-white text-start ">{formik.errors.author}</p>

        <input
          type="text"
          id="author"
          className="w-full px-3 py-2 bg-slate-900 rounded focus:outline-none focus:border-blue-500"
          onChange={(e) => formik.setFieldValue('author', e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-start text-white text-sm font-bold mb-2"
          htmlFor="genre"
        >
          Género
        </label>
        <p className="text-white text-start ">{formik.errors.genre}</p>

        <input
          type="text"
          id="genre"
          className="w-full px-3 py-2 bg-slate-900 rounded focus:outline-none focus:border-blue-500"
          onChange={(e) => formik.setFieldValue('genre', e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-start text-white text-sm font-bold mb-2"
          htmlFor="publicationDate"
        >
          Fecha de publicación
        </label>
        <p className="text-white text-start ">
          {formik.errors.publicationDate}
        </p>

        <input
          type="date"
          id="publicationDate"
          className=" w-full px-3 py-2 bg-slate-900 text-slate-200 rounded focus:outline-none focus:border-blue-500"
          onChange={(e) =>
            formik.setFieldValue('publicationDate', e.target.value)
          }
          required
        />
      </div>
      <button
        type="button"
        onClick={() => formik.handleSubmit()}
        className="bg-slate-700 text-white py-2 px-4 rounded transition-colors duration-300"
      >
        Enviar
      </button>
    </form>
  )
}

export default AddBookForm
