// store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import themeReducer from './themeSlice'
import questionReducer from './questionSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    question: questionReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
