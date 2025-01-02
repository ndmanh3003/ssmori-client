import { instance } from '..'

import { ICustomer } from './customer.type'

class CustomerApi {
  async getCustomer() {
    return await instance.get<ICustomer>('customer')
  }

  async updateCustomer(data: Pick<ICustomer, 'name' | 'email' | 'gender'>) {
    return await instance.put('customer', data)
  }

  async closeCustomerCard() {
    return await instance.post('customer/close-card')
  }
}

const customerApi = new CustomerApi()

export { customerApi }
