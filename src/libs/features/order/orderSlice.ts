import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/libs/store'

interface IDishState {
  id: number
  quantity: number
}

interface IOrderState {
  dishes: IDishState[]
  total: number
  id?: number
  phone?: string
  address?: string
  branch?: number
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
    decrement: (state, action: PayloadAction<number>) => {
      const dish = state.dishes.find((dish) => dish.id === action.payload)

      if (dish) {
        --dish.quantity

        if (dish.quantity === 0) {
          state.dishes.splice(state.dishes.indexOf(dish), 1)
        }
      }

      state.total -= action.payload
    },
    setBranch: (state, action: PayloadAction<{ id: number; canShip: boolean }>) => {
      state.dishes = []
      state.total = 0
      state.branch = action.payload.id
      state.canShip = action.payload.canShip
    }
  }
})

export const { increment, decrement, setBranch } = orderSlice.actions

export const selectQuantity = (state: RootState, id: number) => {
  const dish = state.order.dishes.find((dish) => dish.id === id)

  return dish ? dish.quantity : 0
}

export default orderSlice.reducer
