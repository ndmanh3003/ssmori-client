'use client'
import { Button, Form, App } from 'antd'
import { useEffect, useState } from 'react'

import InputC from '@/components/form/InputC'
import { emailRules, nameRules, requireRule } from '@/components/form/const'
import SelectC from '@/components/form/SelectC'
import { genderOptions } from '@/components/form/Register'
import { customerApi, ICustomer } from '@/service/api/customer'

export default function InformationDetail({ customer }: { customer: ICustomer }) {
  const [form] = Form.useForm()
  const { message } = App.useApp()
  const [changedValues, setChangedValues] = useState<{ [key: string]: unknown } | null>(null)

  useEffect(() => {
    form.setFieldsValue(customer)
  }, [customer, form])

  const onFinish = async () => {
    const formData = Object.keys(changedValues || {}).reduce((acc: { [key: string]: unknown }, key: string) => {
      if (changedValues && changedValues[key]) {
        acc[key] = changedValues[key]
      }

      return acc
    }, {})

    await customerApi.updateCustomer(formData as Pick<ICustomer, 'name' | 'email' | 'gender'>)
    message.success('Update successfully')
    setChangedValues(null)
  }

  const handleValuesChange = (changedFields: Object) => {
    setChangedValues((prev) => ({
      ...prev,
      ...changedFields
    }))
  }

  return (
    <Form
      form={form}
      layout='vertical'
      name='register'
      size='large'
      onFinish={onFinish}
      onValuesChange={handleValuesChange}
    >
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
