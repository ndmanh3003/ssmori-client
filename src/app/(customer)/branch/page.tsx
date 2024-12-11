'use client'
import Image from 'next/image'
import { useState } from 'react'
import { ShopOutlined, ClockCircleOutlined, PhoneOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Link from 'next/link'

import Heading from '@/components/Heading'
import { IBranch, regions } from '@/mock'
import img from '@/utils/img'

export default function Page() {
  const [info, setInfo] = useState<null | IBranch>()

  return (
    <>
      <Heading>Location</Heading>
      <div className='w-full max-h-[700px] h-[70vh] mt-10 bg-mr-th rounded-3xl overflow-hidden relative'>
        <Image alt='branch' className='h-auto w-full absolute bottom-0 left-0' height={1000} src={img(info?.image || '1CUdmmAXNWssnP3dP5edcyp_9r4y7eYr1')} width={1000} />
        {info && (
          <div className='absolute rounded-2xl right-5 bottom-5 flex space-y-5 flex-col'>
            <div className='h-20 w-[230px] rounded-2xl bg-white overflow-hidden flex items-center'>
              <Image alt='icon' className='h-4/5 w-auto ml-3 mr-2' height={100} src='/icon-elevator.gif' width={100} />
              <div className='text-base w-full'>
                <span className='font-semibold'>{info?.name}</span>
                <br />
                Floor Quantity: {info?.floorQuantity}
              </div>
            </div>
            <div className='h-20 w-[230px] rounded-2xl bg-white overflow-hidden flex items-center'>
              <Image alt='icon' className='h-4/5 w-auto ml-3 mr-2' height={100} src='/icon-park.gif' width={100} />
              <div className='text-base w-full'>
                {info?.hasCarPark ? 'Car parking avail' : 'No car parking'}
                <br />
                {info?.hasMotoPark ? 'Moto parking avail' : 'No moto parking'}
              </div>
            </div>
            <Link href={'menu/' + info?.id}>
              <Button type='primary'>Explore menu, savor sushi!</Button>
            </Link>
          </div>
        )}
        <div className='w-[350px] h-full top-0 left-0 overflow-y-scroll bg-mr-th bg-opacity-90 absolute'>
          {regions.map((region) => (
            <div key={region.name}>
              <h1 className='font-semibold text-mr-nd text-2xl px-5 pt-5'>
                {region.name}
                <div className='text-sm text-black'>Has {region.total} branch(es)</div>
              </h1>
              {region.branches.map((branch) => (
                <div key={branch.name} className='px-5 mb-2 py-2 cursor-pointer hover:bg-mr-th' onMouseEnter={() => setInfo(branch)}>
                  <h2 className='text-lg font-medium'>{branch.name}</h2>
                  <div className='grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-base'>
                    <ShopOutlined className='mb-auto mt-1' />
                    <div>{branch.address}</div>
                    <ClockCircleOutlined />
                    <div>
                      {branch.openTime} - {branch.closeTime}
                    </div>
                    <PhoneOutlined />
                    <div>{branch.canShip ? 'Able to deliver' : 'Not able to deliver'}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
