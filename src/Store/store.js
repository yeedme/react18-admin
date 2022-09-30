import { configureStore } from '@reduxjs/toolkit';
import LoginStatus from './LoginStatus';
//注册store
export default configureStore({
    reducer: {
        LoginStatus: LoginStatus,
    },
});