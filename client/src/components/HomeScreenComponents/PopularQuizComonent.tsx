import React from 'react';
import sportsIcon from '../../assets/icons/sports.svg'; // Substitua pelo caminho real para o seu ícone
import techIcon from '../../assets/icons/tech.svg'; // Substitua pelo caminho real para o seu ícone
import QuizCard from './QuizCard'; // Substitua pelo caminho real para o seu componente
import '../../styles/home/home-styles.css'
import { PopularQuiz, TextWrapper5, Group7 } from '../../styles/home/HomeStyledComponents';
const PopularQuizComponent: React.FC = () => {
  return (
    <PopularQuiz>
      <TextWrapper5>Popular Quiz</TextWrapper5>
      <Group7>
        <QuizCard width="2rem" height="2rem" borderRadius="10px" backgroundColor="#f6e5e5" icone="https://anima-uploads.s3.amazonaws.com/projects/64e2a09d2fd2ed85515d1f82/releases/64e4ea9b030914fbf1dff3ba/img/frame-5.svg" nome="Music"  texto1="10 questions"   avaliacao="4.8"  />
        <QuizCard width="2rem" height="2rem" borderRadius="10px" backgroundColor="#F0F5FC" icone={sportsIcon} nome="Sports"  texto1="10 questions"   avaliacao="4.8" />
        <QuizCard width="2rem" height="2rem" borderRadius="10px" backgroundColor="#FFDAB9"  icone={techIcon} nome="Technology"  texto1="10 questions"   avaliacao="4.8" />
      </Group7>
    </PopularQuiz>
  );
};

export default PopularQuizComponent;
