import { instance } from '..'

import { ICategory, IDish } from './menu.type'

class MenuApi {
  async getDishByDishId(dishId: number) {
    return await instance.get<IDish>(`/menu/dish/${dishId}`)
  }

  async getMenu(branchId?: number) {
    return await instance.get<ICategory[]>(branchId ? `/menu/${branchId}` : '/menu')
  }

  getCombo() {
    return '/menu/combo'
  }

  getBranch() {
    return '/menu/branch'
  }

  getRegion(regionId: number) {
    return `/menu/region/${regionId}`
  }
}

const menuApi = new MenuApi()

export { menuApi }
