import Image from 'next/image'
import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import Link from 'next/link'

import Heading from '@/components/Heading'
import Register from '@/components/form/Register'
import Dish from '@/components/order/Dish'

export default function Page() {
  return (
    <>
      <section className='h-[90vh] max-h-[700px] w-full flex items-center justify-between'>
        <div>
          <Heading isBig impact='Japan first choice'>
            Sushi Mori That
            <br />
            You <span className='text-mr-nd'>Will Love</span>
          </Heading>
          <p className='my-5 text-lg'>The sushi at Sushi Mori is made from ingredients sourced directly from the seas of Japan, then transported to Vietnam by air.</p>
          <Button className='!text-lg !rounded-full !mt-5 !py-6 !px-12' icon={<ArrowRightOutlined />} iconPosition='end' type='primary'>
            View Menu
          </Button>
        </div>
        <Image alt='sushi' className='rotate-90 w-[40vw] h-auto' height={1000} src='/hp-sushi.png' width={1000} />
      </section>
      <section className='flex flex-col items-center'>
        <Heading impact='Sushi Picker'>Popular Menu</Heading>
        <Link className='text-black hover:text-black' href='/menu'>
          <div className='grid grid-cols-5 gap-5 w-full mt-10'>
            {[1, 2, 3, 4, 5].map((index) => (
              <Dish key={'dish' + index} id={index} />
            ))}
          </div>
        </Link>
      </section>
      <div className='mt-52 mb-20 flex w-full justify-center relative'>
        <Image alt='people' className='absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2' height={250} src='/hp-quote.png' width={250} />
        <div className='text-2xl font-semibold relative'>
          I don't trust words. <span className='text-mr-rd'>I trust</span> <br />
          <span className='text-mr-rd'>taste of food.</span>
          <span className='font-impact text-[200px] text-mr-rd absolute rotate-180 -top-5 -left-5 -translate-x-3/4 -translate-y-3/4'> " </span>
        </div>
        <Image alt='people' className='ml-20' height={300} src='/hp-pp.svg' width={400} />
      </div>
      <section className='flex space-x-10 items-center mt-32 pr-20'>
        <div className='w-full'>
          <Heading impact='Sushi Fan'>Join to Order Online!</Heading>
          <Register />
        </div>
        <Image alt='sushi' className='w-2/5 h-auto' height={1000} src='/hp-form.png' width={1000} />
      </section>
      <section className='flex space-x-10 items-center mt-32'>
        <Image alt='sushi' className='w-2/5 h-auto mx-20' height={1000} src='/hp-lover.png' width={1000} />
        <div>
          <Heading impact='Sushi Lover'>Providing healthy food is our goal, but not just that.</Heading>
          <ul className='mt-5 leading-loose !text-base'>
            <li>Fresh and delicious ingredients every time.</li>
            <li>Fast delivery, preserving taste and quality.</li>
            <li>Exclusive loyalty cards with amazing perks.</li>
          </ul>
        </div>
      </section>
    </>
  )
}
