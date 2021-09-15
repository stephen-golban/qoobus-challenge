import { User } from '../../typings'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  current_user: User | null
  logged_in: boolean | null
}

const initialState: InitialState = {
  logged_in: null,
  current_user: null,
}

export const authSlice = createSlice({
  name: 'authSlicer',
  initialState,
  reducers: {
    setLoggedInSlice: (state, action: PayloadAction<boolean | null>) => {
      state.logged_in = action.payload
    },
    setCurrentUserSlice: (state, action: PayloadAction<User | null>) => {
      state.current_user = action.payload
    },
    setLogoutSlice: (state, action: PayloadAction<null>) => {
      state.logged_in = action.payload
      state.current_user = action.payload
    },
  },
})

export const { setLoggedInSlice, setCurrentUserSlice, setLogoutSlice } = authSlice.actions

export default authSlice.reducer
