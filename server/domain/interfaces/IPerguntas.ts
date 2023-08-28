

export interface IPergunta {
  pergunta_id: number;
  quiz_id: number; // Agora é obrigatório
  pergunta_texto: string;
  resposta_correta: number; // Agora é obrigatório
}
