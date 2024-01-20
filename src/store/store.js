import { configureStore } from '@reduxjs/toolkit'
import servicesReducer from './slices/ServicesSlice'
import extrasReducer from './slices/ExtrasSlice'
import multiReducer from './slices/MultistepSlice'
import userReducer from './slices/UserSlice'

export const store = configureStore({
  reducer: {
    services: servicesReducer,
    extras: extrasReducer,
    form:multiReducer,
    user:userReducer
  },
})