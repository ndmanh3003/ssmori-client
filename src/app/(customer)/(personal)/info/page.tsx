'use client'
import { useEffect, useState } from 'react'
import { Button, QRCode, App as Appant } from 'antd'

import Card from '@/components/customer/Card'
import InformationDetail from '@/components/form/InformationDetail'
import { customerApi, ICustomer } from '@/service/api/customer'
import getTime from '@/utils/time'

export default function App() {
  const [customer, setCustomer] = useState<ICustomer | null>(null)
  const { message } = Appant.useApp()

  useEffect(() => {
    customerApi.getCustomer().then((res) => setCustomer(res.data))
  }, [])

  return (
    <>
      {customer && (
        <div className='text-base grid grid-cols-2 gap-10'>
          <div>
            <div className='text-xl mb-5 font-bold'>Information Detail</div>
            <div className='mb-5'>
              Customer tier: <span className='font-bold text-mr-nd'>Gold</span>, upgraded on{' '}
              {getTime(customer.upgradeAt, 'day')}
            </div>
            <InformationDetail customer={customer} />

            <div>
              <div className='text-xl mb-5 mt-10 font-bold'>Card Detail</div>
              {customer.card ? (
                <div className='flex items-center'>
                  <div className='flex-1'>
                    <p>
                      Your card now is open at {getTime(customer.card.issueAt, 'day')}, you can flip it to see the back
                      side.
                    </p>
                    <Button
                      className='my-5'
                      type='primary'
                      onClick={async () => {
                        await customerApi.closeCustomerCard()
                        await customerApi.getCustomer().then((res) => setCustomer(res.data))

                        message.info('Card closed')
                      }}
                    >
                      Close card
                    </Button>
                  </div>
                  <QRCode icon='/logo.svg' value={customer.card.id.toString()} />
                </div>
              ) : (
                <div>No card. Please contact our staff to create one.</div>
              )}
            </div>
          </div>
          <div>
            <div className='text-xl mb-2 font-bold text-center'>Our Exclusive Card Collection</div>
            <Card />
          </div>
        </div>
      )}
    </>
  )
}
