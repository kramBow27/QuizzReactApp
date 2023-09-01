// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  userId: number | null;
  username: string | null;
  profileImage: string | null;
    overallPerformance: string | null;
    lastTwoQuizzes?: any[];
    lastTwoQuizzesThemes?: any[];
}


const initialState: UserState = {
    userId: null,
    username: null,
    profileImage: null,
    overallPerformance: null,
    lastTwoQuizzes: [],
    lastTwoQuizzesThemes: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
    setUserData: (state, action: PayloadAction<UserState>) => {
      state.userId = action.payload.userId;
      state.username = action.payload.username;
      state.profileImage = action.payload.profileImage;
        state.overallPerformance = action.payload.overallPerformance;
        state.lastTwoQuizzes = action.payload.lastTwoQuizzes;
        state.lastTwoQuizzesThemes = action.payload.lastTwoQuizzesThemes;
    },
  },
});



export const { setUserId, setUserData } = userSlice.actions;
export default userSlice.reducer;
