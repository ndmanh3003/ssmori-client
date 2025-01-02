'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ShopOutlined, ClockCircleOutlined, PhoneOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Link from 'next/link'

import Heading from '@/components/Heading'
import img from '@/utils/img'
import { IBranch, IRegionBranch, systemApi } from '@/service/api/system'
import getTime from '@/utils/time'

export default function Page() {
  const [info, setInfo] = useState<null | IBranch>()
  const [regionBranch, setRegionBranch] = useState<null | IRegionBranch[]>()

  useEffect(() => {
    systemApi.getRegionBranch().then((res) => setRegionBranch(res.data))
  }, [])

  return (
    <>
      <Heading>Location</Heading>
      <div className='w-full max-h-[700px] h-[70vh] mt-10 bg-mr-th rounded-3xl overflow-hidden relative'>
        <Image
          alt='branch'
          className='h-auto w-full absolute bottom-0 left-0'
          height={1000}
          src={img(info?.image || '1CUdmmAXNWssnP3dP5edcyp_9r4y7eYr1')}
          width={1000}
        />
        {info && (
          <div className='absolute rounded-2xl right-5 bottom-5 flex space-y-5 flex-col items-end'>
            <div className='h-20 w-[230px] rounded-2xl bg-white overflow-hidden flex items-center'>
              <Image
                unoptimized
                alt='icon'
                className='h-4/5 w-auto ml-3 mr-2'
                height={100}
                src='/icon-elevator.gif'
                width={100}
              />
              <div className='text-base w-full'>
                <span className='font-semibold'>{info?.name}</span>
                <br />
                Floor Quantity: {Math.floor(Math.random() * 4) + 1}
              </div>
            </div>
            <div className='h-20 w-[230px] rounded-2xl bg-white overflow-hidden flex items-center'>
              <Image
                unoptimized
                alt='icon'
                className='h-4/5 w-auto ml-3 mr-2'
                height={100}
                src='/icon-park.gif'
                width={100}
              />
              <div className='text-base w-full'>
                {info?.hasCarPark ? 'Car parking avail' : 'No car parking'}
                <br />
                {info?.hasMotoPark ? 'Moto parking avail' : 'No moto parking'}
              </div>
            </div>
            <div className='flex space-x-5'>
              <Link href={'menu/' + info?.id}>
                <Button className='!rounded-full' type='primary'>
                  Explore menu
                </Button>
              </Link>
              <Link href={'booking/' + info?.id}>
                <Button className='!rounded-full' type='primary'>
                  Reserve your table
                </Button>
              </Link>
            </div>
          </div>
        )}
        <div className='w-[350px] h-full top-0 left-0 overflow-y-scroll bg-mr-th bg-opacity-90 absolute'>
          {regionBranch &&
            regionBranch.map((region, index) => (
              <div key={'region' + index}>
                <h1 className='font-semibold text-mr-nd text-2xl px-5 pt-5'>
                  {region.regionName}
                  <div className='text-sm text-black'>Has {region.total} branch(es)</div>
                </h1>
                {region.branches.map((branch, index) => (
                  <div
                    key={'branch' + index}
                    className='px-5 mb-2 py-2 cursor-pointer hover:bg-mr-th'
                    onMouseEnter={() => setInfo(branch)}
                  >
                    <h2 className='text-lg font-medium'>{branch.name}</h2>
                    <div className='grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-base'>
                      <ShopOutlined className='mb-auto mt-1' />
                      <div>{branch.address}</div>
                      <ClockCircleOutlined />
                      <div>
                        {getTime(branch.openTime, 'time')} - {getTime(branch.closeTime, 'time')}
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
