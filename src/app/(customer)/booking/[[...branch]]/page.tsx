'use client'
import { useEffect, useState } from 'react'
import { App, Button, DatePicker, Form, InputNumber } from 'antd'
import dayjs from 'dayjs'
import { useParams, useRouter } from 'next/navigation'

import SelectC from '@/components/form/SelectC'
import { phoneRules, requireRule } from '@/components/form/const'
import InputC from '@/components/form/InputC'
import ModalC from '@/components/overlay/ModalC'
import { IBranch, systemApi } from '@/service/api/system'
import { IReserveOrderReq, orderApi } from '@/service/api/order'

export default function Booking() {
  const { branch: branchId } = useParams<{ branch: string }>()
  const { message } = App.useApp()
  const router = useRouter()
  const [branches, setBranches] = useState<IBranch[]>()
  const [form] = Form.useForm()

  useEffect(() => {
    systemApi.getRegionBranch().then((res) => setBranches(res.data.flatMap((region) => region.branches)))
  }, [])

  form.setFieldsValue({ branchId: +branchId })

  const disabledDate = (current: dayjs.Dayjs) => {
    return current && current.isBefore(dayjs(), 'day')
  }

  const disabledTime = (current: dayjs.Dayjs) => {
    const now = dayjs()
    const twoHoursLater = now.add(2, 'hour')

    if (current.isSame(dayjs(), 'day')) {
      return {
        disabledHours: () => {
          const disabledHours = []

          for (let i = 0; i < twoHoursLater.hour(); i++) {
            disabledHours.push(i)
          }

          return disabledHours
        }
      }
    }

    return {}
  }

  const handleSubmit = async (values: IReserveOrderReq) => {
    await orderApi.createReserveOrder(values)
    router.back()
    message.success('Booking successfully')
  }

  return (
    <ModalC title='Booking'>
      <Form form={form} layout='vertical' size='large' onFinish={handleSubmit}>
        <Form.Item label='Branch' name='branchId' rules={requireRule}>
          <SelectC
            options={
              branches
                ? branches.map((branch) => ({ value: branch.id, label: branch.name + ' - ' + branch.address }))
                : []
            }
            placeholder='Select branch'
          />
        </Form.Item>
        <Form.Item label='Phone Number' name='phone' rules={phoneRules}>
          <InputC placeholder='Input your phone number' type='number' />
        </Form.Item>
        <Form.Item label='Number of Guests' name='guestCount' rules={requireRule}>
          <InputNumber className='!bg-transparent !w-full' min={1} placeholder='Input number of guests' type='number' />
        </Form.Item>
        <Form.Item label='Booking at' name='bookingAt' rules={requireRule}>
          <DatePicker
            className='!bg-transparent !w-full'
            disabledDate={disabledDate}
            disabledTime={disabledTime}
            format='DD/MM/YYYY HH:00'
            showTime={{
              format: 'HH',
              defaultValue: dayjs().set('minute', 0),
              use12Hours: false
            }}
          />
        </Form.Item>
        <Button htmlType='submit' type='primary'>
          Booking
        </Button>
      </Form>
    </ModalC>
  )
}
