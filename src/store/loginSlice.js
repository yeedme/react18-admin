//用来确认 是否登入成功 和路由鉴权
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    auth:true,//auth:true ==最高权限 auth:false 一般权限
    loginStatus:true //是否登入成功 
}
export const Silcer=createSlice({
    name:"login",
    initialState,
    reducers:{
        setAuth:( state,action )=>{
            state.auth=action.payload;
        },
        setLoginStatus:( state,action )=>{
            // console.log(action.payload);
            state.loginStatus=action.payload
        }
    }
})
export const { setAuth ,setLoginStatus}=Silcer.actions;
export const selectAuth=(state)=>state.login.auth;
export const selectloginStatus=(state)=>state.login.loginStatus;
export default Silcer.reducer