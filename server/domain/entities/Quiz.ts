import { IQuizRealizado, IQuizTema } from "../interfaces/IQuizRealizado"; // Certifique-se de que o import está correto

export class Quiz implements IQuizRealizado {
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
  data_termino?: Date;
  tempo_duracao_maximo: number;
  tempo_duracao: number;
  id_pergunta: number;
  status: 'iniciado' | 'finalizado' | 'cancelado';

  constructor(
    id: number,
    usuario_id: number,
    tema_id: number,
    tema: IQuizTema,
    performance: number,
    data_inicio: Date,
    tempo_duracao_maximo: number,
    tempo_duracao: number,
    numero_questoes: number = 10, // Valor padrão para numero_questoes
    numero_acertos: number = 0, // Valor padrão
    numero_erros: number = 0, // Valor padrão
    progresso: number = 0, // Valor padrão
    data_termino?: Date,
    id_pergunta: number = 1, // Valor padrão
    status: 'iniciado' | 'finalizado' | 'cancelado' = 'iniciado' // Valor padrão
  ) {
    this.id = id;
    this.usuario_id = usuario_id;
    this.tema_id = tema_id;
    this.tema = tema;
    this.performance = performance;
    this.data_inicio = data_inicio;
    this.tempo_duracao_maximo = tempo_duracao_maximo;
    this.tempo_duracao = tempo_duracao;
    this.numero_questoes = numero_questoes;
    this.numero_acertos = numero_acertos;
    this.numero_erros = numero_erros;
    this.progresso = progresso;
    if (data_termino) {
      this.data_termino = data_termino;
    }
    this.id_pergunta = id_pergunta;
    this.status = status;
  }


 
}
