import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./users/reducer";
import usersReposReducer from "./usersRepos/reducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    usersRepos: usersReposReducer,
  },
});

export default store;
