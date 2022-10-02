//判断用户是否登入成功 
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'LoginStatus',
    initialState: {
        value: false,
        RealName:""  //false：没有登入成功 true：登入成功  
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
        setRealName: (state,action) => {    
            console.log(state,action);      
            state.RealName = action.payload;
        },

    },
});

export const { online, offline,setRealName } = slice.actions;

export const selectStatus = state => state.LoginStatus.value;
export const RealName = state => state.LoginStatus.RealName;
export default slice.reducer;
