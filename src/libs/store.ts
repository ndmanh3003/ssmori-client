import { configureStore } from '@reduxjs/toolkit'

import dishReducer from './features/dish/dishSlice'

export const makeStore = () => {
  return configureStore({
    reducer: { dish: dishReducer }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
