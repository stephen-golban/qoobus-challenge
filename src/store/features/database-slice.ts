import { User } from '../../typings'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Database = { users: User[] }

const initialState: Database = {
  users: [],
}

export const databaseSlice = createSlice({
  name: 'databaseSlicer',
  initialState,
  reducers: {
    createUserSlice: (state: Database, action: PayloadAction<User>) => {
      state.users.push(action.payload)
    },
    destroyDatabaseSlice: (state: Database, action: PayloadAction<boolean>) => {
      if (action.payload) state.users = []
    },
  },
})

export const { createUserSlice, destroyDatabaseSlice } = databaseSlice.actions

export default databaseSlice.reducer
