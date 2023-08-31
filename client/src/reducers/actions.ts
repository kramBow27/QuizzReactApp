// userActions.ts
import { SET_USER_ID, SET_USER_DATA } from './actionTypes';
import { UserActionTypes, SetUserDataAction } from './types';
import { UserState } from './types';

export const setUserId = (userId: number ): UserActionTypes => {
  return {
    type: SET_USER_ID,
    payload: userId,
  };
};
export const setUserData = (userState : UserState ): SetUserDataAction => {
  return {
    type: SET_USER_DATA,
    payload: userState,
  };
};

