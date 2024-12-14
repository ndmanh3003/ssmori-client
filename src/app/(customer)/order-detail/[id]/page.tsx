'use client'
import { useRouter } from 'next/navigation'
import { Button } from 'antd'
import { useEffect, useState } from 'react'

import DrawerC from '@/components/overlay/DrawerC'
import price from '@/utils/price'
import { IOrder } from '@/components'
import { invoices } from '@/mock'
import Status from '@/components/order/Status'

export default function OrderDetail({ params }: { params: Promise<{ id: string }> }) {
  const [invoice, setInvoice] = useState<IOrder | null>(null)
  const router = useRouter()

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params
      const invoiceId = Number(resolvedParams.id)

      const invoice = invoices.find((invoice) => invoice.id === invoiceId)

      if (invoice) {
        setInvoice(invoice)
      } else {
        router.push('/menu')
      }
    }
    fetchParams()
  }, [params])

  return (
    invoice && (
      <DrawerC title='Order detail'>
        <div className='text-base flex items-center'>
          <span>ID: {invoice.id}</span>
          <Status status={invoice.status} />
        </div>
        <div className='text-xl font-semibold my-2 mt-5'>Information</div>
        <div className='text-base grid grid-cols-[auto_1fr] gap-x-4'>
          <span>Order at:</span>
          <span>{invoice.orderAt}</span>
          <span>Branch:</span> <span>{invoice.branch}</span>
          {invoice.type === 'O' && (
            <>
              <span>Phone:</span> <span>{invoice.phone}</span>
              <span>Address:</span> <span className='line-clamp-1'>{invoice.address}</span>
              <span>Distance:</span> <span>{invoice.distanceKm} km</span>
            </>
          )}
        </div>

        <div className='text-xl font-semibold my-2 mt-5'>Detail</div>
        <div className='text-base'>
          <div className='grid grid-cols-[auto_1fr] mb-2'>
            <div>Quantity</div>
            <div className='text-right'>Sum</div>
          </div>
          {invoice.detail.map((item) => {
            return (
              <div key={'dish' + item.id} className='grid grid-cols-[auto_1fr] mb-2'>
                <div className='col-span-2 text-lg font-medium line-clamp-1'>{item.nameEn}</div>
                <div>{item.quantity}</div>
                <div className='text-right'>{price(item.sum)}</div>
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
        {invoice.status === 'completed' && (
          <Button className='!mt-5 !text-base' type='primary'>
            Confim delious sushi 🍣
          </Button>
        )}
      </DrawerC>
    )
  )
}
