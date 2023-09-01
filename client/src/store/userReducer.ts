import { UserState, UserActionTypes } from './types';
import { SET_USER_ID, SET_USER_DATA } from './actionTypes';

const initialState: UserState = {
    userId: null,
    username: null,
    profileImage: null,
    overallPerformance: null,
    LastTwoQuizzes: [],
    LastTwoQuizzesTheme: []
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case SET_USER_ID:
      return {
        ...state,
        userId: action.payload
          };

    default:
      return state;
  }
};

export default userReducer;