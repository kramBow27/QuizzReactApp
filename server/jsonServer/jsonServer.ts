const express = require('express');
const fs = require('fs');
import path from "path";
const cors = require('cors');
const jwt  = require('jsonwebtoken');

export const startJsonServer = (app: any) =>
{
    console.log('json');
  app.get('/details/:tema_id', async (req: any, res: any) => {
  try {
    const tema_id = req.params.tema_id;
     const temaFilePath = path.join(__dirname, '../json/quiz_temas.json');
    const rawData = fs.readFileSync(temaFilePath, 'utf8');
    const themes = JSON.parse(rawData);
    const theme = themes.find((item: any) => item.tema_id === parseInt(tema_id));

    if (!theme) {
      return res.status(404).json({ message: "Tema não encontrado" });
    }

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

    // Carregar temas do arquivo JSON
    const temaFilePath = path.join(__dirname, '../json/quiz_temas.json');
    const rawDataThemes = fs.readFileSync(temaFilePath, 'utf8');
    const themes = JSON.parse(rawDataThemes);

    const theme = themes.find((item: any) => item.tema_id === parseInt(tema_id));

    if (!theme) {
      return res.status(404).json({ message: "Tema não encontrado" });
    }

    // Carregar perguntas do arquivo JSON
    const questionFilePath = path.join(__dirname, '../json/perguntas.json');
    const rawDataQuestions = fs.readFileSync(questionFilePath, 'utf8');
    const questions = JSON.parse(rawDataQuestions).filter((item: any) => item.quiz_tema_id === parseInt(tema_id));

    const questionsWithAlternatives = [];

   
    const alternativeFilePath = path.join(__dirname, '../json/alternativas.json');
    const rawDataAlternatives = fs.readFileSync(alternativeFilePath, 'utf8');
    const alternatives = JSON.parse(rawDataAlternatives);

    for (const question of questions) {
      question.alternativas = alternatives.filter((item: any) => item.pergunta_id === question.pergunta_id);
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
    console.log("Iniciando rota de login via JSON...");
    const { username, password } = req.body;
    console.log(`Dados recebidos: username = ${username}, password = ${password}`);

    // Ler usuários do arquivo JSON
    const userFilePath = path.join(__dirname, '../json/usuario.json');
    const userRawData = fs.readFileSync(userFilePath, 'utf-8');
    const users = JSON.parse(userRawData);

    const user = users.find((u: any) => u.nome === username && u.senha === password);
    if (!user) {
      console.log("Credenciais inválidas");
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    console.log("Usuário extraído:", user);

   
    const quizFilePath = path.join(__dirname, '../json/quiz_realizado.json');
    const quizRawData = fs.readFileSync(quizFilePath, 'utf-8');
    const quizzes = JSON.parse(quizRawData);

    const lastTwoQuizzes = quizzes.filter((quiz: any) => quiz.usuario_id === user.usuario_id)
                                  .sort((a: any, b: any) => new Date(b.data_inicio).getTime() - new Date(a.data_inicio).getTime())
                                  .slice(0, 2);
    
   
    const themeFilePath = path.join(__dirname, '../json/quiz_temas.json');
    const themeRawData = fs.readFileSync(themeFilePath, 'utf-8');
    const themes = JSON.parse(themeRawData);

    const lastTwoQuizzesThemes = lastTwoQuizzes.map((quiz: any) => themes.find((theme: any) => theme.tema_id === quiz.tema_id));

    console.log("Dois últimos quizzes:", lastTwoQuizzes);
    console.log("Dois últimos temas:", lastTwoQuizzesThemes);

    
    const token = jwt.sign(
      { user: user.usuario_id, username: user.nome, profileImage: user.profile_image },
      "senha",
      { expiresIn: '1h' }
    );

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

}