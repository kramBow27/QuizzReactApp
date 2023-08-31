const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:4000', // substitua com o domínio do seu frontend
  optionsSuccessStatus: 204
}

const jwt  = require('jsonwebtoken');
const { QueryResult } = require('pg');

const app = express();
app.use(cors());
app.use(cors(corsOptions));
app.use(express.json());
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "quiz_app",
  password: '#Vendetta9',
  port: 5432,
});


// app.get('/home', async (req: any, res: any) => {
//   console.log("entrou na rota")
//   try {
//     const { username, password } = req.body;
   
//     const result = await pool.query('SELECT * FROM usuario WHERE nome = $1 AND senha = $2', [username, password]);
//     if (result.rowCount === 0) {
//       return res.status(401).json({ error: 'Credenciais inválidas' });
//     }
//  const user = result.rows[0];
//   const token = jwt.sign(
//     { userId: user.usuario_id, username: user.nome },
//     "senha",
//     { expiresIn: '1h' }
//     );

//     res.status(200).json({ message: 'Autenticado com sucesso', token });
//   } catch (err) {
//     res.status(500).json({ error: 'Erro interno do servidor' });
//   }
// });

// app.listen(3001, () => {
//   console.log('Servidor rodando na porta 3001');
// });

app.get('/details/:tema_id', async (req: any, res: any) => {
  try {
    const tema_id = req.params.tema_id;
    const result = await pool.query('SELECT * FROM quiz_temas WHERE tema_id = $1', [tema_id]);
    const theme = result.rows[0];
    console.log("TEMATEMA NO SERVIDOR", theme)
    res.status(200).json({
      message: "Tema",
      theme
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});

app.get('/questions/:tema_id', async (req: any, res: any) => {
  try {
    const tema_id = req.params.tema_id;
    const questions = await pool.query('SELECT * FROM perguntas WHERE quiz_tema_id = $1', [tema_id]);
    const questionsWithAlternatives = [];

    for (const question of questions.rows) {
      const alternatives = await pool.query('SELECT * FROM alternativas WHERE pergunta_id = $1', [question.pergunta_id]);
      question.alternativas = alternatives.rows;
      questionsWithAlternatives.push(question);
    }

    res.status(200).json({
      questions: questionsWithAlternatives 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});


app.post('/login', async (req: any, res: any) => {  
 
  try {
    const { username, password } = req.body;
   
    const result = await pool.query('SELECT * FROM usuario WHERE nome = $1 AND senha = $2', [username, password]);
    if (result.rowCount === 0) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    console.log("Resultado da consulta:", result.rows);
    const user = result.rows[0];
    console.log("Usuário extraído:", user);
  const token = jwt.sign(
  { user: user.usuario_id, username: user.nome, profileImage: user.profile_image },
  "senha",
    { expiresIn: '1h' }
  
    );
   const lastTwoQuizzesResult = await pool.query('SELECT * FROM quiz_realizado WHERE usuario_id = $1 ORDER BY data_inicio DESC LIMIT 2', [user.usuario_id]);
    const lastTwoQuizzes = lastTwoQuizzesResult.rows;
   
    
    let lastTwoQuizzesThemes: any[] = []
for (const item of lastTwoQuizzes) {
  const lastQuizzThemeResult = await pool.query('SELECT * FROM quiz_temas WHERE tema_id = $1', [item.tema_id]);
  lastTwoQuizzesThemes.push(lastQuizzThemeResult.rows[0]); // Assumindo que é retornado apenas um tema por consulta
}
    
    console.log("SAIU DO BLOCO")
    console.log("Dois ultimos quizzes", lastTwoQuizzes);
    console.log("DOIS ULTIMOS TEMAS FORA DO BLOCO" , lastTwoQuizzesThemes)
   

   res.status(200).json({
  message: 'Autenticado com sucesso',
  token,
  userId: user.usuario_id,
  username: user.nome,
  profileImage: user.profile_image,
     overallPerformance: user.overall_performance,
   lastTwoQuizzes, lastTwoQuizzesThemes
});
  } catch (err) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});