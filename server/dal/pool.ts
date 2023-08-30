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


app.post('/login', async (req: any, res: any) => {
  
  console.log("entrou na rota")
  try {
    const { username, password } = req.body;
    console.log("User", username);
    console.log("password", password);

    console.log("POOL", pool);
    const result = await pool.query('SELECT * FROM usuario WHERE nome = $1 AND senha = $2', [username, password]);
    console.log("resultado", result);
    if (result.rowCount === 0) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
 const user = result.rows[0];
    console.log("usuario", user);
  const token = jwt.sign(
    { userId: user.usuario_id, username: user.nome },
    "senha",
    { expiresIn: '1h' }
    );
    console.log("token", token)
    // aqui, você pode gerar um token ou qualquer outra forma de manter o usuário autenticado
    res.status(200).json({ message: 'Autenticado com sucesso', token });
  } catch (err) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});