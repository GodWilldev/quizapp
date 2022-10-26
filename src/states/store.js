import { configureStore } from '@reduxjs/toolkit';

import scoreReducer from './slices/scoreSlice';
import curQuestReducer from './slices/curQuestSlice';
import questionsReducer from './slices/questionsSlice';
import startQuizReducer from './slices/startQuizSlice';

export const store = configureStore({
    reducer: {
      score : scoreReducer,
      currentQuestion: curQuestReducer,
      questions: questionsReducer,
      startQuiz: startQuizReducer
    }
});