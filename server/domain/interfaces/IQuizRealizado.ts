import { IQuizTema } from "./IQuizTemas";

export interface IQuizRealizado {
  id: number;
  usuario_id: number;
  numero_questoes: number;
  numero_acertos: number;
  numero_erros: number;
  progresso: number;
  tema_id: number;
  tema: IQuizTema;
  performance: number;
  data_inicio: Date;
  data_termino?: Date; // Opcional
  tempo_duracao_maximo: number;
  tempo_duracao: number;
  id_pergunta: number;
  status: 'iniciado' | 'finalizado' | 'cancelado';
}
export { IQuizTema };

