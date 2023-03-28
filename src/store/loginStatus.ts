import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'loginStatus',
  initialState: {
    value: false,
  },
  reducers: {
    turnOff: (state) => {
      state.value =false;
    },
    turnOn: (state) => {
      state.value = true;
    },

  },
});

export const { turnOff, turnOn  } = counterSlice.actions;
export const selectLoginStatus=(state)=>state.loginStatus.value;
export default counterSlice.reducer;