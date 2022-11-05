import { configureStore } from "@reduxjs/toolkit/";
import login from './loginSlice';
//注册 store 
export default configureStore({
    reducer:{
        login:login
    }
})