export interface IUsuario {
  usuario_id: number;
  nome: string;
  sobrenome: string;
  email: string;
    data_nascimento: Date; // Agora é obrigatório
  profile_image?: string; // Pode ser nulo
  google_auth_id: string; // Agora é obrigatório
  overall_performance?: number; // Pode ser nulo, valor padrão 0
}