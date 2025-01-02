export interface ICustomer {
  id: number
  name: string
  phone: string
  email: string
  gender: string
  type: 'M' | 'S' | 'G'
  point: number
  upgradeAt: string
  card?: ICard
}

export interface ICard {
  id: number
  issueAt: string
  isClosed: boolean
  branch: number
  customer: number
}
