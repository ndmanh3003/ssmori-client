'use client'
import { App, Button, Form } from 'antd'

import { emailRules, nameRules, otpRules, phoneRules, requireRule } from './const'
import InputC from './InputC'
import SelectC, { IOption } from './SelectC'

import useCountdown from '@/hooks/useCountdown'
import { authApi, IRegisterReq } from '@/service/api/auth'
import { tokenStorage } from '@/service/localStorage/token'
import { useAppDispatch } from '@/hooks/redux'
import { setAuth } from '@/libs/features/auth/authSlide'

export const genderOptions: IOption[] = [
  { value: 'M', label: 'Male' },
  { value: 'F', label: 'Female' },
  { value: 'O', label: 'Other' }
]

export default function Register() {
  const { seconds, resetCountdown } = useCountdown(3)
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()

  const { message } = App.useApp()

  const sendOtp = async () => {
    const values = await form.validateFields(['phone'])
    const phone = values.phone

    await authApi.sendOtp(phone, 'U')

    message.success('OTP sent to ' + phone)
    resetCountdown()
  }

  const onFinish = async (values: IRegisterReq) => {
    await authApi.register(values).then((res) => tokenStorage.setToken(res.data))
    await authApi.getme().then((res) => dispatch(setAuth(res.data)))

    message.success('Success')
  }

  return (
    <Form
      className='!max-w-[600px] !mt-10'
      form={form}
      layout='vertical'
      name='register'
      size='large'
      onFinish={onFinish}
    >
      <Form.Item name='name' rules={nameRules}>
        <InputC placeholder='Full Name' />
      </Form.Item>
      <Form.Item name='phone' rules={phoneRules}>
        <InputC placeholder='Phone Number' type='number' />
      </Form.Item>
      <Form.Item name='otp' rules={otpRules}>
        <div className='!flex'>
          <InputC placeholder='OTP' type='number' />
          <Button
            className='!w-32 min-w-32 !ml-auto !text-base !text-mr-rd !font-medium'
            disabled={!!seconds}
            type='link'
            onClick={sendOtp}
          >
            Get OTP
            {seconds ? ` (${seconds})` : ''}
          </Button>
        </div>
      </Form.Item>
      <Form.Item name='email' rules={emailRules}>
        <InputC placeholder='Email' />
      </Form.Item>
      <Form.Item name='gender' rules={requireRule}>
        <SelectC options={genderOptions} placeholder='Gender' />
      </Form.Item>
      <Button htmlType='submit' type='primary'>
        Register
      </Button>
    </Form>
  )
}
