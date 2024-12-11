import Image from 'next/image'
import { Button } from 'antd'
import Link from 'next/link'

import Heading from '@/components/Heading'

export default function Page() {
  return (
    <>
      <section className='flex space-x-10 items-center mt-32'>
        <Image alt='sushi' className='w-2/5 h-auto mx-20' height={1000} src='/hp-lover.png' width={1000} />
        <div>
          <Heading>Choose a restaurant</Heading>
          <div className='text-base'>Please select a branch first, as the menu may vary between locations.</div>
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
