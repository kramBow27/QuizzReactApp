import { IUsuario } from "../interfaces/IUsuario";

export class Usuario implements IUsuario {
  usuario_id: number;
  nome: string;
  sobrenome: string;
  email: string;
  data_nascimento: Date;
  profile_image?: string;
  google_auth_id: string;
  overall_performance?: number;

  constructor(usuario_id: number, nome: string, sobrenome: string, email: string, data_nascimento: Date, google_auth_id: string, profile_image?: string, overall_performance: number = 0) {
    this.usuario_id = usuario_id;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.data_nascimento = data_nascimento;
    this.google_auth_id = google_auth_id;
    this.profile_image = profile_image;
    this.overall_performance = overall_performance;
  }


}
