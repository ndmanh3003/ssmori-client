'use client'
import { usePathname, useRouter } from 'next/navigation'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown } from 'antd'

import Heading from '@/components/Heading'

const items = [
  { label: 'Personal Management', key: '/info' },
  { label: 'Invoice History', key: '/invoice' }
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const header = pathname.startsWith('/info') ? 'Personal Management' : 'Invoice History'

  const onClick = ({ key }: { key: string }) => {
    router.push(key)
  }

  return (
    <>
      <Heading>
        {header}
        <Dropdown menu={{ items, onClick }}>
          <button
            key='link'
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            onClick={(e) => e.preventDefault()}
          >
            <DownOutlined className='!text-base' />
          </button>
        </Dropdown>
      </Heading>
      <div className='mt-10 text-base'>{children} </div>
    </>
  )
}
