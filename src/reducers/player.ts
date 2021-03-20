import { createSlice } from "@reduxjs/toolkit";

export const player = createSlice({
  name: "player",
  initialState: {
    nickname: "",
    gameLvl: 2,
    points: 0,
  },
  reducers: {
    addStorePoints: (state, action) => {
      state.points += action.payload;
    },
    subtractStorePoints: (state, action) => {
      state.points -= action.payload;
    },
    clearStorePoints: (state) => {
      state.points = 0;
    },
    setStoreUserName: (state, action) => {
      state.nickname = action.payload;
    },
    setStoreGameLvl: (state, action) => {
      state.gameLvl = action.payload;
    },
  },
});

export const {
  addStorePoints,
  subtractStorePoints,
  setStoreUserName,
  setStoreGameLvl,
  clearStorePoints,
} = player.actions;

export const selectNickname = (state: any) => state.player.nickname;
export const selectGameLvl = (state: any) => state.player.gameLvl;
export const selectPoints = (state: any) => state.player.points;

export default player.reducer;
