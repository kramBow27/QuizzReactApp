import React, { useState } from 'react';
import { useAuth } from '../util/AuthContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  width: 200px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const LoginScreen: React.FC = () => {
    const { setIsLoggedIn } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();
    const handleLogin = async () => {
    
    try {
        console.log("função foi chamad")
        console.log("username", username);
        console.log("password", password);
    // Aqui, faço uma requisição POST para a rota '/login' no seu servidor.
    // Você pode ajustar a URL conforme necessário.
    const response = await axios.post('http://localhost:3000/login', {
      username: username,
      password: password
    });
        console.log("response", response)

    // Verifica se a autenticação foi bem-sucedida. Você pode ter que ajustar essa condição
    // dependendo de como sua API responde a uma autenticação bem-sucedida.
    if (response.data.message === 'Autenticado com sucesso') {
      // Supondo que você tenha um método setIsLoggedIn em seu AuthContext
      setIsLoggedIn(true);
      // Armazene o token no local storage ou faça qualquer outra coisa que você precisar
        localStorage.setItem('token', response.data.token);
        navigate('/home');;
    } else {
      // Se a autenticação falhar, você pode definir um estado para mostrar uma mensagem de erro, por exemplo.
      console.log("Falha na autenticação");
    }
  } catch (error) {
    // Trate erros aqui, como mostrar uma mensagem ao usuário.
    console.error("Ocorreu um erro durante o login: ", error);
  }
};

  return (
    <LoginWrapper>
      <h1>Login</h1>
      <Input 
        type="text" 
        placeholder="Nome" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input 
        type="password" 
        placeholder="Senha" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>
        Log-In
      </Button>
    </LoginWrapper>
  );
};

export default LoginScreen;
