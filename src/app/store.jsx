import { configureStore } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

const navSlice = createSlice({
  name: 'navState',
  initialState: {
    logoState: 0
  },
  reducers: {
    toggleNav: (state,param) => {
      if(!param.payload)
        state.logoState = 1
      else
        state.logoState = 0
    }
  }
})
export const {toggleNav} = navSlice.actions


export default configureStore({
  reducer: {
    navState : navSlice.reducer
  }
})