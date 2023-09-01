import React from 'react';
import sportsIcon from '../../assets/icons/sports.svg'; // Substitua pelo caminho real para o seu ícone
import techIcon from '../../assets/icons/tech.svg'; // Substitua pelo caminho real para o seu ícone
import QuizCard from './QuizCard'; // Substitua pelo caminho real para o seu componente
import '../../styles/home/home-styles.css'
import { PopularQuiz, TextWrapper5, Group7 } from '../../styles/home/HomeStyledComponents';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import { setThemeData } from '../../store/themeSlice';
const PopularQuizComponent: React.FC = () => {
   const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  let itemList: any[] = [];
  console.log("LAST TWO QUIZZES", user.lastTwoQuizzesThemes)
  const handleClick = async (id: string) => {
    try {
    
      // Realiza a requisição GET
      const response = await axios.get(`http://localhost:3000/details/${id}`);
      console.log("DATA", response.data)
      if (response.status === 200) {
        // Navega para a rota /quizz
        navigate('/details');
         dispatch(setThemeData(response.data.theme)); 
      }
    } catch (error) {
      console.error('Ocorreu um erro na requisição:', error);
    }
  };
  return (
    <PopularQuiz>
      <TextWrapper5>Popular Quiz</TextWrapper5>
      <Group7>
        <div onClick={() => handleClick('3')} >
          <QuizCard width="2rem" height="2rem" borderRadius="10px" backgroundColor="#f6e5e5" icone="https://anima-uploads.s3.amazonaws.com/projects/64e2a09d2fd2ed85515d1f82/releases/64e4ea9b030914fbf1dff3ba/img/frame-5.svg" nome="Music" texto1="10 questions" avaliacao="4.8" />
</div>
        <div onClick={() => handleClick('2')} >
          <QuizCard width="2rem" height="2rem" borderRadius="10px" backgroundColor="#F0F5FC" icone={sportsIcon} nome="Sports" texto1="10 questions" avaliacao="4.8" />
        </div>
        <div onClick={() => handleClick('1')}>
       
          <QuizCard width="2rem" height="2rem" borderRadius="10px" backgroundColor="#FFDAB9" icone={techIcon} nome="Technology" texto1="10 questions" avaliacao="4.8" />
          </div>
      </Group7>
    </PopularQuiz>
  );
};

export default PopularQuizComponent;
