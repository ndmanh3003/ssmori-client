export interface IDish {
  id: number
  isCombo: boolean
  nameVn: string
  nameEn: string
  price: number
  canShip: boolean
  img: string
  isDeleted: boolean
  dishes?: {
    nameVn: string
    nameEn: string
    id: number
  }[]
}

export interface ICategory {
  id: number
  name: string
  dishes: number[]
  total: number
}
