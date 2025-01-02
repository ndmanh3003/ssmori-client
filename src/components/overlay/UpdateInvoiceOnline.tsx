import { useRouter } from 'next/navigation'
import { Button, Form } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'

import InputC from '../form/InputC'
import { phoneRules, requireRule } from '../form/const'

import ModalC from './ModalC'

import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { clear, setInfo } from '@/libs/features/order/orderSlice'
import { orderApi } from '@/service/api/order'

export default function UpdateInvoiceOnline() {
  const [form] = Form.useForm()
  const router = useRouter()
  const total = useAppSelector((state) => state.order.total)
  const order = useAppSelector((state) => state.order)
  const [distance, setDistance] = useState(0)
  const dispatch = useAppDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (value: { phone: string; address: string }) => {
    dispatch(setInfo({ phone: value.phone, address: value.address }))
    setIsModalOpen(false)

    orderApi
      .createOnlineOrder({
        phone: value.phone,
        address: value.address,
        distanceKm: distance,
        branchId: order.branch || 0,
        dishes: order.dishes
      })
      .then((res) => {
        dispatch(clear())
        router.push('/order-detail/' + res.data)
      })
  }

  const handleValuesChange = (changedValues: { address?: string }) => {
    if (changedValues.address !== undefined) {
      const addressLength = changedValues.address?.length || 0

      setDistance(parseFloat((((addressLength + 1.53) * 27) % 15).toFixed(2)))
    }
  }

  useEffect(() => {
    form.setFieldsValue({
      phone: order.phone,
      address: order.address
    })

    setDistance(parseFloat((((order.address?.length || 0 + 1.53) * 27) % 15).toFixed(2)))
  }, [order])

  return (
    <>
      <Button
        className='!rounded-full !px-5 !ml-5'
        disabled={!total}
        icon={<ShoppingCartOutlined />}
        type='primary'
        onClick={() => setIsModalOpen(true)}
      >
        Ship now
      </Button>
      <ModalC open={isModalOpen} title='Update your information' onCancel={() => setIsModalOpen(false)}>
        <Form form={form} layout='vertical' size='large' onFinish={handleSubmit} onValuesChange={handleValuesChange}>
          <Form.Item label='Phone Number' name='phone' rules={phoneRules}>
            <InputC placeholder='Input your phone number' type='number' />
          </Form.Item>
          <Form.Item label='Address' name='address' rules={requireRule}>
            <InputC placeholder='Input your address' />
          </Form.Item>
          <div className='flex justify-between items-center'>
            <span className='text-base'> Distance: {distance} km</span>
            <Button htmlType='submit' type='primary'>
              Order now
            </Button>
          </div>
        </Form>
      </ModalC>
    </>
  )
}
