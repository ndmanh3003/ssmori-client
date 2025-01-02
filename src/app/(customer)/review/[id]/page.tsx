'use client'
import { Form, Input, Rate, Button, App as Appant } from 'antd'
import { useRouter } from 'next/navigation'

import Heading from '@/components/Heading'
import { requireRule } from '@/components/form/const'

export default function App({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const { message } = Appant.useApp()

  const onFinish = async (values: unknown) => {
    const res = { id: Number((await params).id), ...(values as object) }

    console.log(res)
    message.success('Thank you for your feedback!')
    router.push('/')
  }

  return (
    <>
      <Heading>Rate Your Dining Experience</Heading>
      <Form className='!mt-10' layout='vertical' onFinish={onFinish}>
        <div className='grid grid-cols-2 gap-x-5'>
          <Form.Item label='Service' name='service' rules={requireRule}>
            <Rate />
          </Form.Item>
          <Form.Item label='Quality' name='quality' rules={requireRule}>
            <Rate />
          </Form.Item>
          <Form.Item label='Price' name='price' rules={requireRule}>
            <Rate />
          </Form.Item>
          <Form.Item label='Location' name='location' rules={requireRule}>
            <Rate />
          </Form.Item>
        </div>

        <Form.Item label='Comment' name='comment'>
          <Input.TextArea
            showCount
            autoSize={{ minRows: 3, maxRows: 6 }}
            className='!bg-transparent !rounded-xl'
            maxLength={200}
          />
        </Form.Item>
        <Button htmlType='submit' type='primary'>
          Submit
        </Button>
      </Form>
    </>
  )
}
