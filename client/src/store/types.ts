import { SET_ALTERNATIVE_DATA, SET_QUESTION_DATA, SET_THEME_DATA, SET_USER_ID } from "./actionTypes";
import { SET_USER_DATA } from "./actionTypes";

export interface UserState {
  userId: number | null;
  username: string | null;
  profileImage: string | null;
    overallPerformance: string | null;
    LastTwoQuizzes?: any[];
    LastTwoQuizzesTheme?: any[];
}

export interface ThemeState {
    tema_id: number;
    tema_nome: string;
    descricao: string;
    backgroundcolor: string;
    icone: string;
}
export interface AlternativaState{
    alternativa_id: number;
    pergunta_id: number;
    alternativa_texto: string;
    correta: boolean;
    tema_id: number

}
export interface QuestionState {
    pergunta_id: number;
    quiz_tema_id: number;
    pergunta_texto: string;
    resposta_correta: string;
    contem_imagem: boolean;
    alternativas: AlternativaState[];
}
interface SetUserIdAction {
  type: typeof SET_USER_ID;
  payload: number;
}
export interface SetThemeDataAction {
    type: typeof SET_THEME_DATA;
    payload: ThemeState;
}

export interface SetQuestionDataAction {
    type: typeof SET_QUESTION_DATA;
    payload: QuestionState;

}

export interface SetAlternativeDataAction {
    type: typeof SET_ALTERNATIVE_DATA;
    payload: AlternativaState;
}

export interface SetUserDataAction {
  type: typeof SET_USER_DATA;
    payload: UserState;
}
export type UserActionTypes = SetUserIdAction;