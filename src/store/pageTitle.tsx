import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export const pagetitle = createSlice({
  name: "pagetitle",
  initialState: {
    value: "数据面板",
  },
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});
export const pagetitleStatus = (state: any) => state.pagetitle.value;
export const { setTitle } = pagetitle.actions;
export default pagetitle.reducer;
