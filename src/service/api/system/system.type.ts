export interface IBranch {
  id: number
  name: string
  address: string
  image: string
  openTime: string
  closeTime: string
  phone: number
  hasMotoPark: boolean
  hasCarPark: boolean
  canShip: boolean
  region: number
  isDeleted: boolean
}

export interface IRegionBranch {
  regionId: number
  regionName: string
  branches: IBranch[]
  total: number
}
