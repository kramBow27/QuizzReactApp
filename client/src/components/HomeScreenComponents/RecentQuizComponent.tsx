import React from 'react';
import { setThemeData } from '../../store/themeSlice';
import ReadingIcon from '../../assets/icons/reading.svg'
import speakingIcon from '../../assets/icons/speech.svg'; // Substitua pelo caminho real para o seu ícone
import RecentQuizCard from './RecentQuizCard';
import { RecentQuiz, TextWrapper11, Group17 } from '../../styles/home/HomeStyledComponents';
import '../../styles/home/home-styles.css'// Substitua pelo caminho real para o seu componente
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const RecentQuizComponent: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  let itemList: any[] = [];
  console.log("LAST TWO QUIZZES", user.lastTwoQuizzesThemes)
  const handleClick = async (item: any) => {
    try {
      console.log("ITEM", item)
      // Realiza a requisição GET
      const response = await axios.get(`http://localhost:3000/details/${item.tema_id}`);
      console.log("DATA", response.data)
      if (response.status === 200) {
        // Navega para a rota /quizz
        navigate('/details');
         dispatch(setThemeData(item)); 
      }
    } catch (error) {
      console.error('Ocorreu um erro na requisição:', error);
    }
  };
const renderRecentQuizzes = (quizzes: any) => {
  return quizzes.map((item: any) => (
    <div onClick={() => handleClick(item)} key={item.tema_id}>
    <RecentQuizCard 
      tema={item.tema} 
      icone={item.icone} 
      progress="75%" 
    /></div>
  ));
};
  return (
    <RecentQuiz>
      <TextWrapper11>Recent Quiz</TextWrapper11>
      <Group17>
     
         {user.lastTwoQuizzesThemes ? renderRecentQuizzes(user.lastTwoQuizzesThemes) : null}
       
      </Group17>
    </RecentQuiz>
  );
};

export default RecentQuizComponent;
