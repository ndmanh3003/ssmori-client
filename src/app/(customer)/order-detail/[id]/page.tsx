'use client'
import { Button, App } from 'antd'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

import DrawerC from '@/components/overlay/DrawerC'
import price from '@/utils/price'
import Status from '@/components/order/Status'
import { IOrderDetailRes, orderApi } from '@/service/api/order'
import getTime from '@/utils/time'

export default function OrderDetail() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const [invoice, setInvoice] = useState<IOrderDetailRes>()
  const { message } = App.useApp()

  useEffect(() => {
    orderApi.getOrderDetail(+id).then((res) => setInvoice(res.data))
  }, [])

  const cancelOrder = async () => {
    if (!invoice) {
      return
    }

    await orderApi.deleteOrder(invoice.id).then(() => router.back())
    message.warning('Order has been canceled')
  }

  return (
    invoice && (
      <DrawerC open title='Order detail'>
        <div className='text-base flex items-center'>
          <span>ID: {invoice.id}</span>
          <Status status={invoice.status} />
        </div>
        <div className='text-xl font-semibold my-2 mt-5'>Information</div>
        <div className='text-base grid grid-cols-[auto_1fr] gap-x-4'>
          <span>Order at:</span>
          <span>{getTime(invoice.orderAt)}</span>
          <span>Branch:</span> <span>{invoice.branch}</span>
          {invoice.type === 'O' && (
            <>
              <span>Phone:</span> <span>{invoice.phone}</span>
              <span>Address:</span> <span className='line-clamp-1'>{invoice.address}</span>
              <span>Distance:</span> <span>{invoice.distanceKm} km</span>
            </>
          )}
          {invoice.type === 'R' && (
            <>
              <span>Guest count:</span> <span>{invoice.guestCount}</span>
              <span>Booking at:</span> <span className='line-clamp-1'>{getTime(invoice.bookingAt || '')}</span>
            </>
          )}
        </div>

        <div className='text-xl font-semibold my-2 mt-5'>Detail</div>
        <div className='text-base'>
          <div className='grid grid-cols-[auto_1fr] mb-2 font-bold'>
            <div>QUANTITY</div>
            <div className='text-right'>SUM</div>
          </div>
          {invoice.dishes.length &&
            invoice.dishes.map((dish) => {
              return (
                <div key={'dish' + dish.dish} className='grid grid-cols-[auto_1fr] mb-2'>
                  <div className='col-span-2 font-semibold line-clamp-1'>{dish.nameEn}</div>
                  <div>{dish.quantity}</div>
                  <div className='text-right'>{price(dish.sum)}</div>
                </div>
              )
            })}
        </div>
        <div className='border-t border-mr-nd text-base'>
          <div className='grid grid-cols-[auto_1fr] mb-2 mt-5'>
            <div>Total</div>
            <div className='text-right'>{price(Number(invoice.total))}</div>
            <div>Dish discount</div>
            <div className='text-right'>{price(Number(invoice.dishDiscount))}</div>
            <div>Ship cost</div>
            <div className='text-right'>{price(Number(invoice.shipCost))}</div>
            <div>Shipping discount</div>
            <div className='text-right'>{price(Number(invoice.shipDiscount))}</div>
            <div className='border-t col-span-2 mt-5 border-mr-nd text-base' />
            <div>Total payment</div>
            <div className='text-right'>{price(Number(invoice.totalPayment))}</div>
          </div>
        </div>
        {invoice.type === 'O' && invoice.status === 'submitted' && (
          <Button className='!mt-5 !text-base' type='primary' onClick={() => cancelOrder()}>
            Cancel order
          </Button>
        )}
      </DrawerC>
    )
  )
}
