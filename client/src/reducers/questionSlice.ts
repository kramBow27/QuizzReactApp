import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuestionState } from "./types";

const initialState: QuestionState[] = [];

export const questionSlice = createSlice({
  name: 'alternative',
  initialState,
  reducers: {

    setQuestionData: (state: QuestionState[], action: PayloadAction<QuestionState[]>) => {
         return  state = action.payload;
      
    },
  },
});

export const { setQuestionData } = questionSlice.actions;

// Exportar o reducer
export default questionSlice.reducer;