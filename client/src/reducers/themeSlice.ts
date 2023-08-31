import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeState } from './types';

const initialState: ThemeState = {
    tema_id:0,
    tema_nome: "",
    icone: "",
    backgroundcolor: "",
 descricao: ""
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {

    setThemeData: (state, action: PayloadAction<ThemeState>) => {
      state.tema_id = action.payload.tema_id
      state.tema_nome = action.payload.tema_nome;
          state.icone = action.payload.icone;
        state.backgroundcolor = action.payload.backgroundcolor
        state.descricao = action.payload.descricao;
      
    },
  },
});

export const { setThemeData } = themeSlice.actions;

// Exportar o reducer
export default themeSlice.reducer;