'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { CloseCircleFilled, MinusCircleFilled } from '@ant-design/icons'

import img from '@/utils/img'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { decrement, increment, selectQuantity } from '@/libs/features/order/orderSlice'
import price from '@/utils/price'
import { IDish, menuApi } from '@/service/api/menu'
import cn from '@/utils/cn'

export default function Dish({ id }: { id: number }) {
  const [dish, setDish] = useState<IDish | null>(null)

  const quantity = useAppSelector((state) => selectQuantity(state, id))
  const branchCanShip = useAppSelector((state) => state.order.canShip)
  const dispatch = useAppDispatch()

  useEffect(() => {
    menuApi.getDishByDishId(id).then((res) => setDish(res.data))
  }, [id])

  if (!dish) {
    return null
  }

  return (
    <div className='bg-white w-full rounded-2xl overflow-hidden shadow-menu group flex flex-col justify-between min-w-260 cursor-default'>
      <div>
        <Image alt='menu' className='w-full aspect-video' height={500} src={img(dish.img)} width={500} />
        <div className='px-7 pt-3'>
          <h1 className='text-lg font-semibold text-center w-full line-clamp-2'>{dish.nameEn}</h1>
        </div>
      </div>

      {dish.isCombo && (
        <div className='mx-3'>
          {dish.dishes?.map((dishItem, index) => (
            <div key={'combo dish' + dishItem.id + dish.id}>
              {index + 1}. {dishItem.nameEn}
            </div>
          ))}
        </div>
      )}
      <div className='rounded-l-2xl py-1 p-2 pr-2 my-2 ml-2 flex justify-between items-center !bg-mr-th'>
        <span className='text-lg font-bold'>{price(dish.price)}</span>
        <div
          className={cn(
            'flex items-center space-x-2',
            dish.canShip ? 'text-mr-nd' : 'text-gray-700',
            !branchCanShip && 'hidden'
          )}
        >
          {dish.canShip ? (
            <>
              {quantity > 0 && (
                <>
                  <MinusCircleFilled
                    className='!text-xl !cursor-pointer'
                    onClick={() => dispatch(decrement({ id, price: dish.price }))}
                  />
                  <span>{quantity}</span>
                </>
              )}
              <CloseCircleFilled
                className='!text-xl !cursor-pointer !rotate-45'
                onClick={() => dispatch(increment({ id, price: dish.price }))}
              />
            </>
          ) : (
            <>
              <span>Can't ship</span>
              <CloseCircleFilled className='!text-xl' />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
