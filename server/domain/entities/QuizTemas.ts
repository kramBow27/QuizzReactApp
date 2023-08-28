import { IQuizTema } from "../interfaces/IQuizTemas";

export class QuizTema implements IQuizTema {
  tema_id: number;
  tema_nome: string;
  descricao: string;

  constructor(tema_id: number, tema_nome: string, descricao: string) {
    this.tema_id = tema_id;
    this.tema_nome = tema_nome;
    this.descricao = descricao;
  }

  // Você pode adicionar métodos adicionais aqui se desejar
}
