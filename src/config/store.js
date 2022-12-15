import { configureStore } from '@reduxjs/toolkit'
import shakeSlice from '../features/shakeFeature/shakeSlice'

export default configureStore({
  reducer: {
    stateApple: shakeSlice,
  }, 
})