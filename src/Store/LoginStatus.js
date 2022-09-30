//判断用户是否登入成功 
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'LoginStatus',
    initialState: {
        value: false,  //false：没有登入成功 true：登入成功  
    },
    reducers: {
        online: state => {
            console.log("状态改为online");
            state.value =true;
        },
        offline: state => {
            console.log("状态改为offline");
            state.value = false;
        },

    },
});

export const { online, offline } = slice.actions;

export const selectStatus = state => state.LoginStatus.value;
export default slice.reducer;
