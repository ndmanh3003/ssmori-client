import { Button, Form } from 'antd'
import { useState } from 'react'

import InputC from '../form/InputC'
import { phoneRules, requireRule } from '../form/const'

import ModalC from './ModalC'

export default function UpdateInvoiceOnline() {
  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [changedValues, setChangedValues] = useState<{ [key: string]: unknown } | null>(null)

  const handleValuesChange = (changedFields: Object) => {
    setChangedValues((prev) => ({
      ...prev,
      ...changedFields
    }))
  }

  const handleSubmit = () => {
    const formData = Object.keys(changedValues || {}).reduce((acc: { [key: string]: unknown }, key: string) => {
      if (changedValues && changedValues[key]) {
        acc[key] = changedValues[key]
      }

      return acc
    }, {})

    console.log('Changed fields data:', formData)
    setChangedValues(null)
    setIsModalOpen(false)
  }

  return (
    <>
      <Button className='!m-0 !p-0' type='link' onClick={() => setIsModalOpen(true)}>
        Update your information?
      </Button>
      <ModalC footer={null} open={isModalOpen} title='Update your information' onCancel={() => setIsModalOpen(false)}>
        <Form form={form} layout='vertical' size='large' onFinish={handleSubmit} onValuesChange={handleValuesChange}>
          <Form.Item label='Phone Number' name='phone' rules={phoneRules}>
            <InputC placeholder='Input your phone number' type='number' />
          </Form.Item>
          <Form.Item label='Address' name='address' rules={requireRule}>
            <InputC placeholder='Input your address' />
          </Form.Item>
          <div className='flex justify-between items-center'>
            <span className='text-base'> Distance: {Number((Math.random() * 9 + 1).toFixed(2))} km</span>
            <Button hidden={!changedValues} htmlType='submit' type='primary'>
              Update
            </Button>
          </div>
        </Form>
      </ModalC>
    </>
  )
}
