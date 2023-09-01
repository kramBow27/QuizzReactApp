const express = require('express');
const fs = require('fs');
import path from "path";
const cors = require('cors');
const jwt = require('jsonwebtoken');

export const startDatabaseServer = (app:any) => { 
const { Pool } = require('pg');
  console.log("database")
  const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "quiz_app",
    password: '#Vendetta9',
    port: 5432,
  });
  console.log(pool);



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
      console.log("Iniciando rota de login...");
      const { username, password } = req.body;
      console.log(`Dados recebidos: username = ${username}, password = ${password}`);
   
      const result = await pool.query('SELECT * FROM usuario WHERE nome = $1 AND senha = $2', [username, password]);
      if (result.rowCount === 0) {
        console.log("Credenciais inválidas");
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
      console.log("Dois últimos quizzes:", lastTwoQuizzes);
    
      let lastTwoQuizzesThemes: any[] = [];
      for (const item of lastTwoQuizzes) {
        const lastQuizzThemeResult = await pool.query('SELECT * FROM quiz_temas WHERE tema_id = $1', [item.tema_id]);
        lastTwoQuizzesThemes.push(lastQuizzThemeResult.rows[0]);
      }
    
      console.log("Dois últimos temas:", lastTwoQuizzesThemes);

      res.status(200).json({
        message: 'Autenticado com sucesso',
        token,
        userId: user.usuario_id,
        username: user.nome,
        profileImage: user.profile_image,
        overallPerformance: user.overall_performance,
        lastTwoQuizzes,
        lastTwoQuizzesThemes
      });
    } catch (err: any) {
      console.error("Erro capturado:", err);
      res.status(500).json({ error: 'Erro interno do servidor', details: err.message });
    }
  });
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
};