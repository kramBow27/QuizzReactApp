import { Pool } from 'pg';
import { QuizTema } from '../domain/entities/QuizTemas';

export class QuizTemaRepository {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async create(quizTema: QuizTema): Promise<void> {
    await this.pool.query(
      'INSERT INTO quiz_temas (tema_id, tema_nome, descricao) VALUES ($1, $2, $3)',
      [quizTema.tema_id, quizTema.tema_nome, quizTema.descricao]
    );
  }

  async findById(tema_id: number): Promise<QuizTema | null> {
    const result = await this.pool.query(
      'SELECT * FROM quiz_temas WHERE tema_id = $1',
      [tema_id]
    );
    if (result.rows.length === 0) return null;
    return new QuizTema(result.rows[0].tema_id, result.rows[0].tema_nome, result.rows[0].descricao);
  }

  async findAll(): Promise<QuizTema[]> {
    const result = await this.pool.query('SELECT * FROM quiz_temas');
    return result.rows.map(row => new QuizTema(row.tema_id, row.tema_nome, row.descricao));
  }

  async update(quizTema: QuizTema): Promise<void> {
    await this.pool.query(
      'UPDATE quiz_temas SET tema_nome = $2, descricao = $3 WHERE tema_id = $1',
      [quizTema.tema_id, quizTema.tema_nome, quizTema.descricao]
    );
  }

  async delete(tema_id: number): Promise<void> {
    await this.pool.query(
      'DELETE FROM quiz_temas WHERE tema_id = $1',
      [tema_id]
    );
  }
}
