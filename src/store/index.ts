import { configureStore } from '@reduxjs/toolkit'
import loginStatus from './loginStatus'
import pagetitle from './pageTitle'
export default configureStore({
  reducer: {
    loginStatus: loginStatus,
    pagetitle:pagetitle
  },
})