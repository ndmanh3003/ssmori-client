export interface IRegion {
  id: number
  name: string
  total: number
  branches: IBranch[]
}

export interface IBranch {
  id: number
  name: string
  address: string
  openTime: string
  closeTime: string
  phone: number
  hasMotoPark: boolean
  hasCarPark: boolean
  canShip: boolean
  floorQuantity: number
  image: string
}

export interface IDish {
  id: number
  nameVn: string
  nameEn: string
  price: number
  image: string
  isCombo: boolean
  canShip: boolean
  total?: number
  dishes?: number[]
}

export interface ICategory {
  id: number
  name: string
  total: number
  dishes: number[]
}

export interface IOrder {
  id: number
  branch: string
  orderAt: string
  total: number
  shipCost: number
  shipDiscount: number
  dishDiscount: number
  totalPayment: number

  type: 'O' | 'W' | 'R'
  status: 'ordering' | 'completed' | 'submited' | 'cancel' | 'in-progress' | 'ready' | 'paid' | 'waiting'

  phone?: string
  address?: string
  distanceKm?: number

  detail: {
    id: number
    nameVn: string
    nameEn: string
    quantity: number
    sum: number
  }[]
}
