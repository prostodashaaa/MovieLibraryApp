import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../interfaces/InterfaceUser";
import { loadState } from "./storage";
import { ICardMovie } from "../interfaces/InterfaceMovie";

export const KEY_USERS = "data";

export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: loadState<User[]>(KEY_USERS) ?? [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.users = state.users.map((i) =>
        i.name === action.payload ? { ...i, isLogined: true } : i
      );

      if (!state.users.some((i) => i.name === action.payload)) {
        state.users.push({ name: action.payload, isLogined: true, items: [] });
      }
    },
    logout: (state, action: PayloadAction<string | undefined>) => {
      state.users = state.users.map((i) =>
        i.name === action.payload ? { ...i, isLogined: false } : i
      );
    },
    editFavourites: (
      state,
      action: PayloadAction<{ movie: ICardMovie; name: string }>
    ) => {
      state.users = state.users.map((user) => {
        if (user.isLogined && user.name === action.payload.name) {
          const isExist = user.items.some(
            (item) => item["#IMDB_ID"] === action.payload.movie["#IMDB_ID"]
          );

          const updatedItems = isExist
            ? user.items.filter(
                (item) => item["#IMDB_ID"] !== action.payload.movie["#IMDB_ID"]
              )
            : [...user.items, action.payload.movie];

          return { ...user, items: updatedItems };
        }
        return user;
      });
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
