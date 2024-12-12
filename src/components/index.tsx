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
