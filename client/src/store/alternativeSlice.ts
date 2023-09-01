import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AlternativaState } from "./types";

const initialState: AlternativaState = {
    alternativa_id : 0,
    pergunta_id : 0,
    alternativa_texto : "",
    correta : false,
    tema_id : 0
}

export const alternativeSlice = createSlice({
  name: 'alternative',
  initialState,
  reducers: {

    setAlternativeData: (state: AlternativaState, action: PayloadAction<AlternativaState>) => {
          state.tema_id = action.payload.tema_id;
      state.alternativa_texto = action.payload.alternativa_texto;
          state.alternativa_id = action.payload.alternativa_id;
          state.correta = action.payload.correta;
        state.pergunta_id = action.payload.pergunta_id;
      
    },
  },
});