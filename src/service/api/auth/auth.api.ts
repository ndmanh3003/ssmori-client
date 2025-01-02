import { instance } from '..'

import { ILoginReq, IRegisterReq } from './auth.type'

export type AuthType = 'C' | 'B' | 'S'

class AuthApi {
  async sendOtp(phone: string, type: AuthType | 'U') {
    return await instance.post('auth/send-otp', { phone, type })
  }

  async register(data: IRegisterReq) {
    return await instance.post('auth/register', data)
  }

  async login(data: ILoginReq) {
    return await instance.post('auth/login', data)
  }

  async getme() {
    return await instance.get('auth/me')
  }
}

const authApi = new AuthApi()

export { authApi }
