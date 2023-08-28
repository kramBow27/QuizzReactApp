import { Pool } from 'pg';
import { Alternativa } from '../domain/entities/Alternativas';

export class AlternativaRepository {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async create(alternativa: Alternativa): Promise<void> {
    await this.pool.query(
      'INSERT INTO alternativas (alternativa_id, pergunta_id, alternativa_texto) VALUES ($1, $2, $3)',
      [alternativa.alternativa_id, alternativa.pergunta_id, alternativa.alternativa_texto]
    );
  }

  async read(alternativa_id: number): Promise<Alternativa | null> {
    const result = await this.pool.query(
      'SELECT * FROM alternativas WHERE alternativa_id = $1',
      [alternativa_id]
    );
    if (result.rows.length === 0) return null;
    return new Alternativa(result.rows[0].alternativa_id, result.rows[0].pergunta_id, result.rows[0].alternativa_texto);
  }

  async update(alternativa: Alternativa): Promise<void> {
    await this.pool.query(
      'UPDATE alternativas SET pergunta_id = $2, alternativa_texto = $3 WHERE alternativa_id = $1',
      [alternativa.alternativa_id, alternativa.pergunta_id, alternativa.alternativa_texto]
    );
  }

  async delete(alternativa_id: number): Promise<void> {
    await this.pool.query(
      'DELETE FROM alternativas WHERE alternativa_id = $1',
      [alternativa_id]
    );
  }
}
