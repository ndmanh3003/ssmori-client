'use client'
import { useEffect } from 'react'
import { Button, DatePicker, Form, InputNumber } from 'antd'
import dayjs from 'dayjs'

import { regions } from '@/mock'
import SelectC from '@/components/form/SelectC'
import { phoneRules, requireRule } from '@/components/form/const'
import InputC from '@/components/form/InputC'
import ModalC from '@/components/overlay/ModalC'

export default function Booking({ params }: { params: Promise<{ branch: string }> }) {
  const [form] = Form.useForm()
  const branch = regions.flatMap((region) => region.branches).map((branch) => ({ value: branch.id, label: branch.name + ' - ' + branch.address }))

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params

      if (resolvedParams && resolvedParams.branch) {
        form.setFieldsValue({ branchId: Number(resolvedParams.branch) })
      }
    }
    fetchParams()
  }, [params])

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

  return (
    <ModalC footer={null} title='Booking'>
      <Form form={form} layout='vertical' size='large' onFinish={(values) => console.log(values)}>
        <Form.Item label='Branch' name='branchId' rules={requireRule}>
          <SelectC options={branch} placeholder='Select branch' />
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
