console.log("Iniciando teste de consulta...");

const { Pool } = require('pg');


const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "quiz_app",
  password: 'senha',
  port: 5432,
});

pool.connect()
  .then(() => console.log('Conectado ao banco de dados'))
  .catch(err => console.error('Erro de conexão:', err.stack));

  console.log
const testQuery = async () => {
  try {
    console.log('Executando query...');
    const username = 'Aretha';
    const password = 'senha1';
    const result = await pool.query('SELECT * FROM usuario WHERE nome = $1 AND senha = $2', [username, password]);
    console.log('Resultado da query:', result);

    if (result.rowCount === 0) {
      console.log('Nenhum usuário encontrado com essas credenciais');
    } else {
      console.log('Usuário encontrado:', result.rows[0]);
    }
    
  } catch (error) {
    console.error('Erro ao executar a query:', error);
  }
}

testQuery();
