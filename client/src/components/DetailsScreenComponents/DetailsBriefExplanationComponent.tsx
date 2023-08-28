import React from 'react';
import clockOrangeIcon from '../../assets/icons/clockOrange.svg'
import testIcon from '../../assets/icons/test.svg'
import readIcon from '../../assets/icons/reading.svg'
import speakingIcon from '../../assets/icons/speech.svg'; // Substitua pelo caminho real para o seu ícone
import { DetailsBrief, DetailsDivWrapper, DetailsElement, DetailsElementWrapper, DetailsGroup5, DetailsGroup6, DetailsGroup7, DetailsGroup8, DetailsGroup9, DetailsGroupWrapper,  DetailsP,  DetailsTextWrapper4, DetailsTextWrapper5, DetailsTextWrapper6 } from '../../styles/details/DetailsStyledComponents';
import '../../styles/home/home-styles.css'// Substitua pelo caminho real para o seu componente
import QuizCard from '../HomeScreenComponents/QuizCard';

export const DetailsBriefExplanationComponent: React.FC = () => {
  return (
  <DetailsBrief>
            <DetailsP>Brief explanation about this quiz</DetailsP>
            <DetailsGroup5>
          
              <QuizCard height="1.7rem" width="1.7rem" borderRadius="50%" backgroundColor="#ff9f241a" icone={testIcon} nome="10 Question" texto1="10 point for a correct answer" avaliacao="4.8" />
                 <QuizCard height="1.7rem" width="1.7rem" borderRadius="50%" backgroundColor="#ff9f241a" icone={clockOrangeIcon} nome="1 hour 20 min" texto1="Total duration of quizz"  avaliacao="4.8" />
            </DetailsGroup5>
          </DetailsBrief>
  );
};

export default DetailsBriefExplanationComponent;  
