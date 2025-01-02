import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { message } from 'antd'

import { tokenStorage } from '../localStorage/token'

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const auth = tokenStorage.getToken()

    if (config.headers && !config.headers['Authorization'] && auth !== undefined && auth !== null) {
      config.headers['Authorization'] = `Bearer ${auth}`
    }

    return config
  },
  (error: AxiosError) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  async (error: AxiosError) => {
    console.error('CODE ERROR\n', error)
    message.error(error?.message || 'Something went wrong')

    if (error?.code === 'ERR_NETWORK') {
      window.location.href = ''

      return
    } else if (error?.response?.status === 401 || error?.response?.status === 403) {
      message.error('Unauthorized')

      return
    }

    return Promise.reject(error)
  }
)
