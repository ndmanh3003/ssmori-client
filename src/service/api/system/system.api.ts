import { instance } from '..'

import { IRegionBranch } from './system.type'

class SystemApi {
  getBranchByBranchId(branchId: number) {
    return `/system/branch/${branchId}`
  }

  getRegionBranch() {
    return instance.get<IRegionBranch[]>('/system/region-branch')
  }
}

const systemApi = new SystemApi()

export { systemApi }
