// import { Pool } from 'pg';
// import { Quiz } from '../domain/entities/Quiz';

// export class QuizRepository {
//   private pool: Pool;

//   constructor(pool: Pool) {
//     this.pool = pool;
//   }

//   async create(quiz: Quiz): Promise<void> {
//     await this.pool.query(
//       'INSERT INTO quizzes (quiz_id, tema_id, titulo, descricao, num_perguntas) VALUES ($1, $2, $3, $4, $5)',
//       [quiz.id, quiz.tema_id, quiz.tema, quiz., quiz.num_perguntas]
//     );
//   }

//   async findById(quiz_id: number): Promise<Quiz | null> {
//     const result = await this.pool.query(
//       'SELECT * FROM quizzes WHERE quiz_id = $1',
//       [quiz_id]
//     );
//     if (result.rows.length === 0) return null;
//     return new Quiz(result.rows[0].quiz_id, result.rows[0].tema_id, result.rows[0].titulo, result.rows[0].descricao, result.rows[0].num_perguntas);
//   }

//   async findAllByTemaId(tema_id: number): Promise<Quiz[]> {
//     const result = await this.pool.query(
//       'SELECT * FROM quizzes WHERE tema_id = $1',
//       [tema_id]
//     );
//     return result.rows.map(row => new Quiz(row.quiz_id, row.tema_id, row.titulo, row.descricao, row.num_perguntas));
//   }

//   async update(quiz: Quiz): Promise<void> {
//     await this.pool.query(
//       'UPDATE quizzes SET tema_id = $2, titulo = $3, descricao = $4, num_perguntas = $5 WHERE quiz_id = $1',
//       [quiz.quiz_id, quiz.tema_id, quiz.titulo, quiz.descricao, quiz.num_perguntas]
//     );
//   }

//   async delete(quiz_id: number): Promise<void> {
//     await this.pool.query(
//       'DELETE FROM quizzes WHERE quiz_id = $1',
//       [quiz_id]
//     );
//   }
// }
