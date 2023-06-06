import { Alert, Space } from 'antd'
import { StateModal } from '../../models'
import { motion } from 'framer-motion'

export const ModalFavorites = ({
  _type,
  text,
}: {
  _type: StateModal
  text: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
    >
      <Space direction="vertical" className="w-30 h-10 fixed top-15 right-10">
        <Alert
          message={text}
          type={_type}
          className="text-blue-950 font-semibold bg-white"
          showIcon
        />
      </Space>
    </motion.div>
  )
}
