import { Pool } from 'pg';
import { PerformanceUsuario } from '../domain/entities/PerformanceUsuario';

export class PerformanceUsuarioRepository {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async create(performance: PerformanceUsuario): Promise<void> {
    await this.pool.query(
      'INSERT INTO performance_usuario (performance_id, usuario_id, quiz_id, score, data_execucao) VALUES ($1, $2, $3, $4, $5)',
      [performance.performance_id, performance.usuario_id, performance.quiz_id, performance.score, performance.data_execucao]
    );
  }

  async read(performance_id: number): Promise<PerformanceUsuario | null> {
    const result = await this.pool.query(
      'SELECT * FROM performance_usuario WHERE performance_id = $1',
      [performance_id]
    );
    if (result.rows.length === 0) return null;
    return new PerformanceUsuario(result.rows[0].performance_id, result.rows[0].usuario_id, result.rows[0].quiz_id, result.rows[0].score, result.rows[0].data_execucao);
  }

  async update(performance: PerformanceUsuario): Promise<void> {
    await this.pool.query(
      'UPDATE performance_usuario SET usuario_id = $2, quiz_id = $3, score = $4, data_execucao = $5 WHERE performance_id = $1',
      [performance.performance_id, performance.usuario_id, performance.quiz_id, performance.score, performance.data_execucao]
    );
  }

  async delete(performance_id: number): Promise<void> {
    await this.pool.query(
      'DELETE FROM performance_usuario WHERE performance_id = $1',
      [performance_id]
    );
  }
}
