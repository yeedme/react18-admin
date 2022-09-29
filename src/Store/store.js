import { configureStore } from '@reduxjs/toolkit';
import LoginStatus from './LoginStatus';

export default configureStore({
    reducer: {
        LoginStatus: LoginStatus,
    },
});