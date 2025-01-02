import { AuthType } from './auth.api'

export interface IRegisterReq {
  name: string
  phone: string
  otp: number
  email: string
  gender: 'M' | 'F' | 'O'
}

export type ILoginReq = Pick<IRegisterReq, 'phone' | 'otp'> & { type: AuthType }
