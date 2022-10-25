import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';

import App from './App';
import scoreReducer from './features/scoreSlice';
import curQuestReducer from './features/curQuestSlice';
import questionsReducer from './features/questionsSlice';
import startQuizReducer from './features/startQuizSlice';

const store = configureStore({
  reducer: {
    score : scoreReducer,
    currentQuestion: curQuestReducer,
    questions: questionsReducer,
    startQuiz: startQuizReducer
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);

