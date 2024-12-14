'use client'
import { Drawer, DrawerProps } from 'antd'
import { useRouter } from 'next/navigation'

interface IDrawerC extends DrawerProps {
  children: React.ReactNode
}

export default function DrawerC({ children, ...props }: IDrawerC) {
  const router = useRouter()

  const handleOnChange = () => router.back()

  return (
    <Drawer open width={520} onClose={handleOnChange} {...props}>
      <div>{children}</div>
    </Drawer>
  )
}
