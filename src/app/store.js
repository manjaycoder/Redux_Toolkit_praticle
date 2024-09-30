import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../app/features/couter/couterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})