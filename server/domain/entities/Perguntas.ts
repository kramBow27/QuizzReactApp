import { IPergunta } from "../interfaces/IPerguntas";

export class Pergunta implements IPergunta {
  pergunta_id: number;
  quiz_id: number;
  pergunta_texto: string;
  resposta_correta: number;
  // MUDAR PARA ALTERNATIVA O TIPO DE RESPOSTA CORRETA

  constructor(pergunta_id: number, quiz_id: number, pergunta_texto: string, resposta_correta: number) {
    this.pergunta_id = pergunta_id;
    this.quiz_id = quiz_id;
    this.pergunta_texto = pergunta_texto;
    this.resposta_correta = resposta_correta;
  }

  // Você pode adicionar métodos adicionais aqui se desejar
}