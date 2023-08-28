import { Pool } from 'pg';
import { Usuario } from '../domain/entities/Usuario';

export class UsuarioRepository {
    private pool: Pool;
   constructor(pool: Pool) {
    this.pool = pool;
  }


  async findAll(): Promise<Usuario[]> {
    const result = await this.pool.query('SELECT * FROM usuario');
    return result.rows;
  }

  async findById(id: number): Promise<Usuario | null> {
    const result = await this.pool.query('SELECT * FROM usuario WHERE usuario_id = $1', [id]);
    return result.rows[0] || null;
  }

  async create(usuario: Usuario): Promise<void> {
    await this.pool.query(
      'INSERT INTO usuario (nome, email, data_nascimento, profile_image, google_auth_id, overall_performance) VALUES ($1, $2, $3, $4, $5, $6)',
      [usuario.nome, usuario.email, usuario.data_nascimento, usuario.profile_image, usuario.google_auth_id, usuario.overall_performance]
    );
  }

  async update(id: number, usuario: Usuario): Promise<void> {
    await this.pool.query(
      'UPDATE usuario SET nome = $1, email = $2, data_nascimento = $3, profile_image = $4, google_auth_id = $5, overall_performance = $6 WHERE usuario_id = $7',
      [usuario.nome, usuario.email, usuario.data_nascimento, usuario.profile_image, usuario.google_auth_id, usuario.overall_performance, id]
    );
  }

  async delete(id: number): Promise<void> {
    await this.pool.query('DELETE FROM usuario WHERE usuario_id = $1', [id]);
  }
}
