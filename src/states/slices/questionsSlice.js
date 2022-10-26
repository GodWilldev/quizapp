import { createSlice } from '@reduxjs/toolkit';
//import  defaultquestions from '../datas/questions/programming';

export const questionsSlice = createSlice({
  name: 'questions',
  initialState : {value: "no questions 😜"},
  reducers: {
    putQuestions: (state, action) => {
      //const {type,data}=action.payload;
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { putQuestions} = questionsSlice.actions

export default questionsSlice.reducer