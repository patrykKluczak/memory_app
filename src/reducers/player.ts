import { createSlice } from "@reduxjs/toolkit";

export const player = createSlice({
  name: "player",
  initialState: {
    nickname: "",
    points: 0,
  },
  reducers: {
    addStorePoints: (state, action) => {
      state.points += action.payload;
    },
    clearStorePoints: (state) => {
      state.points = 0;
    },
    setStoreUserName: (state, action) => {
      state.nickname = action.payload;
    },
  },
});

export const {
  addStorePoints,
  setStoreUserName,
  clearStorePoints,
} = player.actions;

export const selectNickname = (state: any) => state.player.nickname;
export const selectPoints = (state: any) => state.player.points;

export default player.reducer;
