import { configureStore } from '@reduxjs/toolkit'
import loginStatus from './loginStatus'

export default configureStore({
  reducer: {
    loginStatus: loginStatus,
  },
})