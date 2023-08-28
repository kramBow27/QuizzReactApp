import { IQuizTema } from "../interfaces/IQuizTemas";

export class QuizTema implements IQuizTema {
  tema_id: number;
  tema_nome: string;
  descricao: string;
  backgroundColor: string;
  icone: string;// Agora é obrigatório

  constructor(tema_id: number, tema_nome: string, descricao: string, backgroundColor: string, icone: string) {
    this.tema_id = tema_id;
    this.tema_nome = tema_nome;
    this.descricao = descricao;
    this.backgroundColor = backgroundColor;
    this.icone = icone;
  }

  // Você pode adicionar métodos adicionais aqui se desejar
}
