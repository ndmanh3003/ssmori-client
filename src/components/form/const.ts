import { Rule } from 'antd/es/form'

export const cnInput = '!bg-transparent !p-2 !px-3 !text-lg !rounded-xl'

export const requireRule: Rule[] = [{ required: true, message: 'Please input this field!' }]

export const nameRules: Rule[] = [...requireRule, { min: 5, message: 'At least 5 characters!' }, { max: 50, message: 'At most 50 characters!' }]

export const phoneRules: Rule[] = [...requireRule, { min: 10, message: 'At least 10 characters!' }, { max: 15, message: 'At most 15 characters!' }]

export const emailRules: Rule[] = [...requireRule, { type: 'email', message: 'Invalid email!' }]

export const otpRules: Rule[] = [...requireRule, { len: 4, message: 'OTP must be 4 numbers!' }]
