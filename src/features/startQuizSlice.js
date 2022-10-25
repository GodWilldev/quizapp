import { createSlice } from '@reduxjs/toolkit'

export const startQuizSlice = createSlice({
  name: 'startQuiz',
  initialState : {value: false},
  reducers: {
    toggleStartQuiz: (state) => {
      state.value = !state.value;
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleStartQuiz } = startQuizSlice.actions;

export default startQuizSlice.reducer;