import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../store'

interface IDish {
  id: number
  quantity: number
}

export const dishSlice = createSlice({
  name: 'dish',
  initialState: [] as IDish[],
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      const dish = state.find((dish) => dish.id === action.payload)

      if (dish) {
        dish.quantity += 1
      } else {
        state.push({ id: action.payload, quantity: 1 })
      }
    },
    decrement: (state, action: PayloadAction<number>) => {
      const dish = state.find((dish) => dish.id === action.payload)

      if (dish) {
        --dish.quantity

        if (dish.quantity === 0) {
          state.splice(state.indexOf(dish), 1)
        }
      }
    }
  }
})

export const { increment, decrement } = dishSlice.actions

export const selectQuantity = (state: RootState, id: number) => {
  const dish = state.dish.find((dish) => dish.id === id)

  return dish ? dish.quantity : 0
}

export default dishSlice.reducer
