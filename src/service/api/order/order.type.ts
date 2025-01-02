import { IDishState } from '@/libs/features/order/orderSlice'

export interface IOnlineOrderReq {
  phone: string
  address: string
  distanceKm: number
  branchId: number

  dishes: IDishState[]
}

export interface IReserveOrderReq {
  guestCount: number
  phone: string
  bookingAt: string
  branchId: number
}

export interface IGetHistoryReq {
  from: string
  status?: string
  type?: string
  page?: number
  limit?: number
}

export interface IOrderRes {
  id: number
  status: 'submitted' | 'canceled' | 'paid'
  orderAt: string
  total: number
  shipCost: number
  dishDiscount: number
  shipDiscount: number
  totalPayment: number
  customer: number
  branch: number
  type: string
  branchInfo: string
}

export interface IOrderDetailRes extends IOrderRes {
  guestCount?: number
  phone?: string
  bookingAt?: string
  distanceKm?: number
  address?: string
  dishes: {
    dish: number
    quantity: number
    sum: number
    nameEn: string
    nameVn: string
  }[]
}

export enum TypeOrder {
  O = 'Online',
  W = 'Walk-in',
  R = 'Reservation'
}
