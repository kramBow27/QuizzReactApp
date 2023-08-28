import { IQuiz } from "../interfaces/IQuiz";

export class Quiz implements IQuiz {
  quiz_id: number;
  tema_id: number;
  titulo: string;
  descricao: string;
  num_perguntas: number;

  constructor(
    quiz_id: number,
    tema_id: number,
    titulo: string,
    descricao: string,
    num_perguntas: number = 10 // Valor padrão para num_perguntas
  ) {
    this.quiz_id = quiz_id;
    this.tema_id = tema_id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.num_perguntas = num_perguntas;
  }

  // Você pode adicionar métodos adicionais aqui se desejar
}
