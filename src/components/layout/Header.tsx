'use client'
import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { UserOutlined } from '@ant-design/icons'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import cn from '@/utils/cn'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { authApi } from '@/service/api/auth'
import { setAuth } from '@/libs/features/auth/authSlide'

export default function Header() {
  const pathname = usePathname()
  const branch = useAppSelector((state) => state.order.branch)
  const isLogined = useAppSelector((state) => state.auth.id)
  const dispatch = useAppDispatch()

  useEffect(() => {
    authApi.getme().then((res) => dispatch(setAuth(res.data)))
  }, [])

  const nav = [
    { label: 'Branch', href: '/branch' },
    { label: 'Menu', href: '/menu/' + (branch ? branch : '') },
    { label: 'Card Benefits', href: '/card' },
    { label: 'Register', href: '/#register-section' }
  ]

  if (pathname.startsWith('/internal')) {
    return <></>
  }

  return (
    <header className='py-3 flex justify-between items-center fixed top-0 max-w-[1440px] w-full px-10 -translate-x-10 bg-mr-th z-50'>
      <Link href='/'>
        <Image alt='logo' height={200} src='/icon-text.svg' width={200} />
      </Link>

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
      <Link href={isLogined ? '/info' : '/login'}>
        <Button className='!rounded-full !bg-transparent !font-medium !px-7' icon={<UserOutlined />}>
          {isLogined ? 'Home' : 'Login'}
        </Button>
      </Link>
    </header>
  )
}
