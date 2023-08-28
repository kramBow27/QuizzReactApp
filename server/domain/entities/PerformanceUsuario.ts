import { IPerformanceUsuario } from "../interfaces/IPerformanceUsuario";
export class PerformanceUsuario implements IPerformanceUsuario {
  performance_id: number;
  usuario_id: number;
  quiz_id: number;
  score: number;
  data_execucao: Date;

  constructor(
    performance_id: number,
    usuario_id: number,
    quiz_id: number,
    score: number,
    data_execucao: Date
  ) {
    this.performance_id = performance_id;
    this.usuario_id = usuario_id;
    this.quiz_id = quiz_id;
    this.score = score;
    this.data_execucao = data_execucao;
  }

  // Você pode adicionar métodos adicionais aqui se desejar
}
