import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AuthType } from '@/service/api/auth'

interface IAuthState {
  id: number | string
  type: AuthType | null
}

const initialState: IAuthState = {
  id: '',
  type: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<IAuthState>) => {
      state.id = +action.payload.id
      state.type = action.payload.type
    },

    removeAuth: (state) => {
      state.id = ''
      state.type = null
    }
  }
})

export const { setAuth, removeAuth } = authSlice.actions

export default authSlice.reducer
