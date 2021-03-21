import { createSlice } from "@reduxjs/toolkit";

export const player = createSlice({
  name: "player",
  initialState: {
    gameStart: false,
    nickname: "",
    gameLvl: 2,
    points: 300,
  },
  reducers: {
    addStorePoints: (state, action) => {
      state.points += action.payload;
    },
    subtractStorePoints: (state, action) => {
      state.points -= action.payload;
    },
    clearStorePoints: (state) => {
      state.points = 300;
    },
    setStoreUserName: (state, action) => {
      state.nickname = action.payload;
    },
    setStoreGameLvl: (state, action) => {
      state.gameLvl = action.payload;
    },
    setStoreGameStart: (state, action) => {
      state.gameStart = action.payload;
    },
  },
});

export const {
  addStorePoints,
  subtractStorePoints,
  setStoreUserName,
  setStoreGameLvl,
  setStoreGameStart,
  clearStorePoints,
} = player.actions;

export const selectNickname = (state: any) => state.player.nickname;
export const selectGameLvl = (state: any) => state.player.gameLvl;
export const selectPoints = (state: any) => state.player.points;
export const selectGameStart = (state: any) => state.player.gameStart;

export default player.reducer;
