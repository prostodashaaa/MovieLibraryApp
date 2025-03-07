import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICardMovie } from "../interfaces/InterfaceMovie";

interface SearchState {
  query: string;
  movies: ICardMovie[] | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  query: "",
  movies: null,
  isLoading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setMovies(state, action: PayloadAction<ICardMovie[] | null>) {
      state.movies = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const searchActions = searchSlice.actions;
