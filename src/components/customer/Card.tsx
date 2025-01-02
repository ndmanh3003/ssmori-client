'use client'
import { Carousel } from 'antd'
import Image from 'next/image'

export default function Card() {
  return (
    <div className='h-full w-full flex flex-col justify-center'>
      <Carousel autoplay draggable arrows={false} autoplaySpeed={2000} dots={false} effect='scrollx'>
        <div className='w-full h-[500px] flex flex-col justify-between'>
          <Image alt='card' className='w-full h-[240px]' height={1000} src='/card-M.svg' width={1000} />
          <Image alt='card' className='w-full h-[240px] mt-[20px]' height={1000} src='/card-S.svg' width={1000} />
        </div>
        <div className='w-full h-[500px]'>
          <Image alt='card' className='w-full h-full' height={1000} src='/card-G.svg' width={1000} />
        </div>
      </Carousel>
    </div>
  )
}
