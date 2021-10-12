import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserRepositories } from "../../api/github";
import { getGithubUsersReposStatus } from "./selectors";

const NAME_DOMAIN = "@@USERS_REPOS";

export const fetchUserRepositories = createAsyncThunk(
  `${NAME_DOMAIN}/FETCH_USERS_REPOS`,
  async (userName, { rejectWithValue }) => {
    try {
      const { data: repos } = await getUserRepositories(userName);
      return repos;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (userName, { getState }) => {
      const state = getState();
      const status = getGithubUsersReposStatus(state, userName);

      if (status === "success" || status === "pending") {
        return false;
      }
    },
  }
);

const userReposSlice = createSlice({
  name: NAME_DOMAIN,
  initialState: {},
  extraReducers: {
    [fetchUserRepositories.pending]: (state, { meta }) => {
      state[meta.arg] = { status: "pending" };
    },
    [fetchUserRepositories.fulfilled]: (state, { meta, payload }) => {
      state[meta.arg] = {
        status: "success",
        data: payload,
      };
    },
    [fetchUserRepositories.rejected]: (state, { meta }) => {
      state[meta.arg] = { status: "rejected" };
    },
  },
});

export default userReposSlice.reducer;
