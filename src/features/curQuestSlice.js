import { createSlice } from '@reduxjs/toolkit'

export const curQuestSlice = createSlice({
  name: 'currentQuestion',
  initialState : {value: 0},
  reducers: {
    incrementQuestion: (state) => {
      state.value += 1
    },
    firstQuestion: (state) => {
      state.value = 0
    }
  },
})

// Action creators are generated for each case reducer function
export const { incrementQuestion, firstQuestion } = curQuestSlice.actions

export default curQuestSlice.reducer