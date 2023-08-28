export interface IQuiz {
  quiz_id: number;
  tema_id: number; // Agora é obrigatório
  titulo: string;
  descricao: string; // Agora é obrigatório
  num_perguntas: number; // Agora é obrigatório, com valor padrão de 10
}
