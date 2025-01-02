'use client'
import { App, Button, Form } from 'antd'

import { otpRules, phoneRules, requireRule } from '@/components/form/const'
import useCountdown from '@/hooks/useCountdown'
import InputC from '@/components/form/InputC'
import { authApi, ILoginReq } from '@/service/api/auth'
import { tokenStorage } from '@/service/localStorage/token'
import ModalC from '@/components/overlay/ModalC'
import SelectC, { IOption } from '@/components/form/SelectC'
import { useAppDispatch } from '@/hooks/redux'
import { setAuth } from '@/libs/features/auth/authSlide'

const typeOptions: IOption[] = [
  { value: 'C', label: 'Customer' },
  { value: 'B', label: 'Branch' },
  { value: 'S', label: 'System' }
]

export default function Login() {
  const { seconds, resetCountdown } = useCountdown(30)
  const [form] = Form.useForm()
  const { message } = App.useApp()
  const dispatch = useAppDispatch()

  const sendOtp = async () => {
    const { phone, type } = await form.validateFields(['phone', 'type'])

    await authApi.sendOtp(phone, type)

    message.success('OTP sent to ' + phone)
    resetCountdown()
  }

  const onFinish = async (values: ILoginReq) => {
    await authApi.login(values).then((res) => tokenStorage.setToken(res.data))
    await authApi.getme().then((res) => dispatch(setAuth(res.data)))

    message.success('Success')
  }

  return (
    <ModalC>
      <Form
        className='!max-w-[600px] !mt-10'
        form={form}
        layout='vertical'
        name='login'
        size='large'
        onFinish={onFinish}
      >
        <Form.Item initialValue={typeOptions[0].value} name='type' rules={requireRule}>
          <SelectC options={typeOptions} placeholder='Gender' />
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
        <Button htmlType='submit' type='primary'>
          Login
        </Button>
      </Form>
    </ModalC>
  )
}
