'use client'
import { Button, Form } from 'antd'
import { useState } from 'react'

import InputC from '@/components/form/InputC'
import { emailRules, nameRules, requireRule } from '@/components/form/const'
import SelectC from '@/components/form/SelectC'
import { genderOptions } from '@/components/form/Register'

export default function InformationDetail() {
  const [form] = Form.useForm()
  const [changedValues, setChangedValues] = useState<{ [key: string]: unknown } | null>(null)

  const onFinish = () => {
    const formData = Object.keys(changedValues || {}).reduce((acc: { [key: string]: unknown }, key: string) => {
      if (changedValues && changedValues[key]) {
        acc[key] = changedValues[key]
      }

      return acc
    }, {})

    console.log('Changed fields data:', formData)
    setChangedValues(null)
  }

  const handleValuesChange = (changedFields: Object) => {
    setChangedValues((prev) => ({
      ...prev,
      ...changedFields
    }))
  }

  return (
    <Form form={form} layout='vertical' name='register' size='large' onFinish={onFinish} onValuesChange={handleValuesChange}>
      <Form.Item name='name' rules={nameRules}>
        <InputC placeholder='Full Name' />
      </Form.Item>
      <Form.Item name='email' rules={emailRules}>
        <InputC placeholder='Email' />
      </Form.Item>
      <Form.Item name='gender' rules={requireRule}>
        <SelectC options={genderOptions} placeholder='Gender' />
      </Form.Item>
      <Button hidden={!changedValues} htmlType='submit' type='primary'>
        Update
      </Button>
    </Form>
  )
}
