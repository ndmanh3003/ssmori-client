import { instance } from '..'

import { IGetHistoryReq, IOnlineOrderReq, IOrderDetailRes, IOrderRes, IReserveOrderReq } from './order.type'

class OrderApi {
  async createOnlineOrder(data: IOnlineOrderReq) {
    return instance.post('/order/online', data)
  }

  async createReserveOrder(data: IReserveOrderReq) {
    return instance.post('/order/reserve', data)
  }

  async deleteOrder(invoiceId: number) {
    return instance.delete('/order', { data: { invoiceId } })
  }

  async getHistory(data: IGetHistoryReq) {
    return instance.get<IOrderRes[]>('/order/history', { params: data })
  }

  async getOrderDetail(invoiceId: number) {
    return instance.get<IOrderDetailRes>('/order/detail/' + invoiceId)
  }
}

const orderApi = new OrderApi()

export { orderApi }
