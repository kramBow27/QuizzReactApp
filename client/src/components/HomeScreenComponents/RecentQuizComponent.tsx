import React from 'react';
import ReadingIcon from '../../assets/icons/reading.svg'
import speakingIcon from '../../assets/icons/speech.svg'; // Substitua pelo caminho real para o seu ícone
import RecentQuizCard from './RecentQuizCard';
import { RecentQuiz, TextWrapper11, Group17 } from '../../styles/home/HomeStyledComponents';
import '../../styles/home/home-styles.css'// Substitua pelo caminho real para o seu componente

export const RecentQuizComponent: React.FC = () => {
  return (
    <RecentQuiz>
      <TextWrapper11>Recent Quiz</TextWrapper11>
      <Group17>
        <RecentQuizCard  icone={ReadingIcon} tema='Reading' progress='85%' />
        <RecentQuizCard  icone={speakingIcon} tema='Speech' progress='55%' /> 
      </Group17>
    </RecentQuiz>
  );
};

export default RecentQuizComponent;
