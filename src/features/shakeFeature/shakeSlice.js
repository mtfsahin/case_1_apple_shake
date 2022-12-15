import { createSlice } from '@reduxjs/toolkit'

export const shakeSlice = createSlice({
  name: 'stateApple',
  initialState: {
    onVisible: false,
    shakeTree: false,
    firstAnimation: false,
    secondAnimation: false,
    thirdAnimation: false,
    fourthAnimation: false
  },
  reducers: {
    shakeTreeOn: (state) => {
      state.shakeTree = true
    }, 
    shakeTreeOff : (state) => {
      state.shakeTree = false
    },
    onVisible : (state) => {
      state.onVisible = true
    },
    offVisible : (state) => {
      state.onVisible = false
    },
    fallOff: (state) => {
      state.onVisible = true
      state.firstAnimation = false
      state.secondAnimation = false
      state.thirdAnimation = false
      state.fourthAnimation = false
      state.shakeTree = false
    },
    fallOnFirst: (state) => {
      state.firstAnimation = true
    },
    fallOnSecond: (state) => {
      state.secondAnimation = true
    },
    fallOnThird: (state) => {
      state.thirdAnimation = true
    },
    fallOnFourth: (state) => {
      state.fourthAnimation = true
    },
  },
})

export const { fallOnFirst,fallOnSecond, fallOnThird, fallOnFourth, fallOff, shakeTreeOn, shakeTreeOff ,onVisible ,offVisible} = shakeSlice.actions

export default shakeSlice.reducer



