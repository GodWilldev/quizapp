import { createSlice } from '@reduxjs/toolkit'

export const scoreSlice = createSlice({
  name: 'score',
  initialState : {value: 0},
  reducers: {
    incrementScore: (state) => {
      state.value += 1
    },
    decrementScore: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    scoreTozero: (state) => {
      state.value = 0
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementScore, decrementScore, incrementByAmount, scoreTozero } = scoreSlice.actions

export default scoreSlice.reducer