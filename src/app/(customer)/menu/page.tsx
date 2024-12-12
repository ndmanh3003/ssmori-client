'use client'
import Image from 'next/image'
import { Button } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import Heading from '@/components/Heading'
import { useAppSelector } from '@/hooks/redux'

export default function Page() {
  const branch = useAppSelector((state) => state.order.branch)
  const router = useRouter()

  useEffect(() => {
    if (branch) {
      router.push('/menu/' + branch)
    }
  }, [branch])

  return (
    <>
      <section className='flex space-x-10 items-center mt-32'>
        <Image alt='sushi' className='w-2/5 h-auto mx-20' height={1000} src='/hp-lover.png' width={1000} />
        <div>
          <Heading>Choose a branch</Heading>
          <div className='text-base'>Please select a branch first, as the menu may vary between branches.</div>
          <Link passHref href='/branch'>
            <Button className='mt-5' type='primary'>
              View Branches
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
