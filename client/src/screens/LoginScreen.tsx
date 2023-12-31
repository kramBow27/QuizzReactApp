import React, { useState } from 'react';
import { useAuth } from '../util/AuthContext';
import { useDispatch } from 'react-redux';
import { setUserData, setUserId} from '../store/userSlice';
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
   const dispatch = useDispatch();
    const { setIsLoggedIn } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();
    const handleLogin = async () => {
    
    try {
    
  
    const response = await axios.post('http://localhost:3000/login', {
      username: username,
      password: password
    });
     

      if (response.data.message === 'Autenticado com sucesso') {
      const {
    userId,
    username,
    profileImage,
        overallPerformance,
    lastTwoQuizzes
  } = response.data;
      setIsLoggedIn(true);
      console.log("DATATATAT",response.data);
      localStorage.setItem('token', response.data.token);

     const userData = {
  userId: response.data.userId,
  username: response.data.username,
  profileImage: response.data.profileImage,
  overallPerformance: response.data.overallPerformance,
  lastTwoQuizzes: response.data.lastTwoQuizzes,
  lastTwoQuizzesThemes: response.data.lastTwoQuizzesThemes
};
        
       console.log("USUARIO ID DEVE VIR AQUI >" , userData)

dispatch(setUserData(userData));
      navigate('/home');
    
    } else {
      
      console.log("Falha na autenticação");
    }
  } catch (error) {
    
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
