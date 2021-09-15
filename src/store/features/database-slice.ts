import { User } from "../../typings";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Database = { users: User[] };

const initialState: Database = {
  users: [],
};

export const databaseSlice = createSlice({
  name: "databaseSlicer",
  initialState,
  reducers: {
    createUserSlice: (state: Database, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
});

export const { createUserSlice } = databaseSlice.actions;

export default databaseSlice.reducer;
