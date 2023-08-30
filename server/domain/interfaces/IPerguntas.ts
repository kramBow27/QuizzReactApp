

export interface IPergunta {
  pergunta_id: number;
  quiz_tema_id: number; // Agora é obrigatório
  pergunta_texto: string;
  contem_imagem: boolean;
  imagem_url: string;
  resposta_correta: number; // Agora é obrigatório
}
