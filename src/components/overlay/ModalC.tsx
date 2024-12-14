'use client'
import { Modal, ModalProps } from 'antd'
import { useRouter } from 'next/navigation'

interface IModalC extends ModalProps {
  children: React.ReactNode
}

export default function ModalC({ children, ...props }: IModalC) {
  const router = useRouter()

  const handleOnChange = () => router.back()

  return (
    <Modal open onCancel={handleOnChange} {...props}>
      <div className='my-4'>{children}</div>
    </Modal>
  )
}
