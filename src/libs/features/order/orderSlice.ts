import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/libs/store'

export interface IDishState {
  id: number
  quantity: number
}

export interface IOrderState {
  phone?: string
  address?: string
  branch?: number
  dishes: IDishState[]
  total: number
  canShip?: boolean
}

const initialState: IOrderState = {
  dishes: [],
  total: 0
}

export const orderSlice = createSlice({
  name: 'order',
  initialState: initialState,
  reducers: {
    increment: (state, action: PayloadAction<{ id: number; price: number }>) => {
      const dish = state.dishes.find((dish) => dish.id === action.payload.id)

      if (dish) {
        dish.quantity += 1
      } else {
        state.dishes.push({ id: action.payload.id, quantity: 1 })
      }

      state.total += action.payload.price
    },
    decrement: (state, action: PayloadAction<{ id: number; price: number }>) => {
      const dish = state.dishes.find((dish) => dish.id === action.payload.id)

      if (dish) {
        --dish.quantity

        if (dish.quantity === 0) {
          state.dishes.splice(state.dishes.indexOf(dish), 1)
        }
      }

      state.total -= action.payload.price
    },
    setBranch: (state, action: PayloadAction<{ id: number; canShip: boolean }>) => {
      state.dishes = []
      state.total = 0
      state.branch = action.payload.id
      state.canShip = action.payload.canShip
    },
    setInfo: (state, action: PayloadAction<{ phone: string; address: string }>) => {
      state.phone = action.payload.phone
      state.address = action.payload.address
    },
    clear: (state) => {
      state.dishes = []
      state.total = 0
    }
  }
})

export const { increment, decrement, setBranch, setInfo, clear } = orderSlice.actions

export const selectQuantity = (state: RootState, id: number) => {
  const dish = state.order.dishes.find((dish) => dish.id === id)

  return dish ? dish.quantity : 0
}

export default orderSlice.reducer
