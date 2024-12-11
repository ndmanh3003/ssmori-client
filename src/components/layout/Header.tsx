'use client'
import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { UserOutlined } from '@ant-design/icons'
import { usePathname } from 'next/navigation'

import { cn } from '@/utils/cn'

const nav = [
  { label: 'Branch', href: '/branch' },
  { label: 'Menu', href: '/menu' },
  { label: 'Card Benefits', href: '/card' },
  { label: 'Register', href: '/reg' }
]

export default function Header() {
  const pathname = usePathname()

  if (pathname.startsWith('/internal')) {
    return <></>
  }

  return (
    <header className='py-3 flex justify-between items-center fixed top-0 max-w-[1440px] w-full px-10 -translate-x-10 bg-mr-th z-50'>
      <Image alt='logo' height={200} src='/icon-text.svg' width={200} />
      <nav>
        {nav.map(({ href, label }) => (
          <Link
            key={href}
            className={cn('mr-7 text-black font-medium hover:text-mr-nd !text-lg', {
              '!font-bold !text-mr-nd': pathname.startsWith(href)
            })}
            href={href}
          >
            {label}
          </Link>
        ))}
      </nav>
      <Button className='!rounded-full !bg-transparent !font-medium !px-7' icon={<UserOutlined />}>
        Login
      </Button>
    </header>
  )
}
