import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface starWarState {
  data: []
}

const initialState: starWarState = {
  data: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setStarsData: (state,action) => {
      state.data=action.payload
    },
   
  },
})

export const { setStarsData } = counterSlice.actions

export default counterSlice.reducer