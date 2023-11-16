import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Local, LocalState } from "../../types";

const initialSliceState: LocalState = {
  locals: [],
};

const localSlice = createSlice({
  name: "local",
  initialState: initialSliceState,
  reducers: {
    loadLocals: (currentState, action: PayloadAction<Local[]>) => ({
      ...currentState,
      locals: action.payload,
    }),
  },
});

export const { loadLocals: loadLocalsActionCreator } = localSlice.actions;

export const localReducer = localSlice.reducer;
