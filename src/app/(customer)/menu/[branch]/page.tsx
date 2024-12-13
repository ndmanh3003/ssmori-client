'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ShoppingCartOutlined } from '@ant-design/icons'

import Heading from '@/components/Heading'
import { categories, regions } from '@/mock'
import Dish from '@/components/order/Dish'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setBranch as setBranchOrder } from '@/libs/features/order/orderSlice'
import price from '@/utils/price'
import { IBranch } from '@/components'

export default function Page({ params }: { params: Promise<{ branch: string }> }) {
  const [branch, setBranch] = useState<IBranch | null>(null)
  const total = useAppSelector((state) => state.order.total)
  const branchCanShip = useAppSelector((state) => state.order.canShip)
  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params
      const branchId = Number(resolvedParams.branch)

      const branch = regions.flatMap((region) => region.branches).find((branch) => branch.id === branchId)

      if (branch) {
        setBranch(branch)
        dispatch(setBranchOrder({ id: branchId, canShip: branch.canShip }))
      } else {
        router.push('/menu')
      }
    }
    fetchParams()
  }, [params])

  return (
    <div className='mb-32'>
      <div className='fixed z-50 space-x-5 bg-mr-rd left-0 bottom-0 py-2 w-full h-fit overflow-hidden flex justify-center'>
        <div className='w-full flex justify-between items-center max-w-[1440px] px-10'>
          <Link href='/'>
            <Button ghost className='!rounded-full !px-5 !text-white !border-white hover:!text-white hover:!border-white' type='primary'>
              Book now!
            </Button>
          </Link>
          <div className='text-white text-lg'>
            {branchCanShip ? (
              <>
                Tổng tiền: {price(Number(total))}
                <Button className='!rounded-full !px-5 !ml-5' disabled={!total} icon={<ShoppingCartOutlined />} type='primary'>
                  Giao ngay
                </Button>
              </>
            ) : (
              <span className='text-base'>
                This branch has no delivery.{' '}
                <Link className='text-white underline hover:text-white' href='/branch'>
                  Choose another one?
                </Link>
              </span>
            )}
          </div>
        </div>
      </div>

      <div className='relative'>
        <Image alt='quote' className='absolute right-0 top-0 scale-x-[-1] -z-10' height={200} src='/hp-quote.png' width={200} />
        <Heading>
          Menu <span className='font-sans text-xl'>{branch?.name}</span>
        </Heading>
        <div className='text-base mt-2 italic'>
          The menu varies by branch. <br />
          <Link className='text-mr-rd underline hover:text-mr-rd' href='/branch'>
            Choose another one?
          </Link>
        </div>
        <div className='mt-16 flex flex-col space-y-5'>
          {categories.map((category, index) => (
            <div key={'category' + index}>
              <h1 className='text-3xl font-header font-medium mt-5 mb-3'>
                {category.name} <span className='font-sans text-base'>{category.total} dish(es)</span>
              </h1>
              <div className='grid grid-cols-5 gap-5 gap-y-7'>
                {category.dishes.map((dishId) => (
                  <Dish key={'dish' + dishId} id={dishId} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
