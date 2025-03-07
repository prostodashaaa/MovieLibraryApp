import { configureStore } from "@reduxjs/toolkit";
import userSlice, { KEY_USERS } from "./user.slice";
import searchSlice from "./search.slice";
import { saveState } from "./storage";

export const store = configureStore({
  reducer: {
    user: userSlice,
    search: searchSlice,
  },
});

store.subscribe(() => {
  saveState(store.getState().user.users, KEY_USERS);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
