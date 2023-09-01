import { IPergunta } from "../interfaces/IPerguntas";

export class Pergunta implements IPergunta {
  pergunta_id: number;
  quiz_id: number;
  pergunta_texto: string;
  resposta_correta: number;
  quiz_tema_id: number;
   contem_imagem: boolean;
  imagem_url: string;

  // MUDAR PARA ALTERNATIVA O TIPO DE RESPOSTA CORRETA

  constructor(pergunta_id: number, quiz_id: number, pergunta_texto: string, resposta_correta: number, quiz_tema_id: number,contem_imagem: boolean, imagem_url: string) {
    this.pergunta_id = pergunta_id;
    this.quiz_id = quiz_id;
    this.pergunta_texto = pergunta_texto;
    this.resposta_correta = resposta_correta;
    this.quiz_tema_id = quiz_tema_id;
    this.contem_imagem = contem_imagem;
    this.imagem_url = imagem_url;
  }
 
  // Você pode adicionar métodos adicionais aqui se desejar
}