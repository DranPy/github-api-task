import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../api/github";

const NAME_DOMAIN = "@@USERS";

export const fetchUsers = createAsyncThunk(
  `${NAME_DOMAIN}/FETCH_USERS`,
  async (userName) => {
    const { data: users } = await getUsers(userName);
    return users.items;
  }
);

const usersSlice = createSlice({
  name: NAME_DOMAIN,
  initialState: {
    status: undefined,
    data: [],
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = "pending";
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
    [fetchUsers.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default usersSlice.reducer;
