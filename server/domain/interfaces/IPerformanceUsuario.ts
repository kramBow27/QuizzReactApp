export interface IPerformanceUsuario {
  performance_id: number;
  usuario_id: number; // Agora é obrigatório
  quiz_id: number; // Agora é obrigatório
  score: number;
  data_execucao: Date; // Agora é obrigatório
}
