import { Button, Form } from 'antd'
import { useState } from 'react'

import InputC from '../form/InputC'
import { phoneRules, requireRule } from '../form/const'

export default function UpdateInvoiceOnline() {
  const [form] = Form.useForm()
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
  }

  return (
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
  )
}
