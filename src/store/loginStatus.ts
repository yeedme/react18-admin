import { createSlice } from '@reduxjs/toolkit';
//用于判断自动登入
export const loginStatus = createSlice({
  name: 'loginStatus',
  initialState: {
    value: true,
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

export const { turnOff, turnOn  } = loginStatus.actions;
export const selectLoginStatus=(state:any)=>state.loginStatus.value;
export default loginStatus.reducer;