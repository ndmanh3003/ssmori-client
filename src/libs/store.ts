import { configureStore } from '@reduxjs/toolkit'

import orderReducer from './features/order/orderSlice'
import authReducer from './features/auth/authSlide'

export const makeStore = () => {
  return configureStore({
    reducer: { order: orderReducer, auth: authReducer }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
