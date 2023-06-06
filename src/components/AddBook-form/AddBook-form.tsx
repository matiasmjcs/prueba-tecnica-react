import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { ModalSuccess } from '../Modal-success/Modal-success'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export const AddBookForm: React.FC = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
    navigate('/')
  }

  function openModal() {
    setIsOpen(true)
  }

  const initial = {
    title: '',
    author: '',
    genre: '',
    publicationDate: '',
  }

  const validation = () => {
    return {
      title: Yup.string().required('Title is required'),
      author: Yup.string().required('The author is required'),
      genre: Yup.string().required('gender is required'),
      publicationDate: Yup.date().required('The publication date is mandatory'),
    }
  }

  const formik = useFormik({
    initialValues: initial,
    validateOnChange: false,
    validationSchema: Yup.object(validation()),
    onSubmit: () => {
      openModal()
    },
  })

  return (
    <>
      <ModalSuccess isOpen={isOpen} closeModal={closeModal} />
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.6 } }}
        className="max-w-md mx-auto bg-slate-950 mt-10 text-sm shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl text-gray-200 font-bold mb-6">
          create new book
        </h2>
        <div className="mb-4">
          <label
            className="block text-start text-white text-sm font-bold mb-2"
            htmlFor="title"
          >
            Tittle
          </label>
          <p className="text-start text-red-500 text-xs">
            {formik.errors.title}
          </p>
          <input
            type="text"
            id="title"
            className="text-slate-300 w-full px-3 py-2 bg-slate-900 rounded focus:outline-none focus:border-blue-500"
            onChange={(e) => formik.setFieldValue('title', e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-start text-white text-sm font-bold mb-2"
            htmlFor="author"
          >
            Author
          </label>
          <p className="text-start text-red-500 text-xs">
            {formik.errors.author}
          </p>

          <input
            type="text"
            id="author"
            className="text-slate-300 w-full px-3 py-2 bg-slate-900 rounded focus:outline-none focus:border-blue-500"
            onChange={(e) => formik.setFieldValue('author', e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-start text-white text-sm font-bold mb-2"
            htmlFor="genre"
          >
            Gender
          </label>
          <p className="text-start text-red-500 text-xs">
            {formik.errors.genre}
          </p>

          <input
            type="text"
            id="genre"
            className="text-slate-300 w-full px-3 py-2 bg-slate-900 rounded focus:outline-none focus:border-blue-500"
            onChange={(e) => formik.setFieldValue('genre', e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-start text-white text-sm font-bold mb-2"
            htmlFor="publicationDate"
          >
            Publication date
          </label>
          <p className=" text-start text-red-500 text-xs">
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
          Add Book
        </button>
      </motion.form>
    </>
  )
}

export default AddBookForm
