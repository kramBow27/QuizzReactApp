import React from 'react';
import { QuizzDivWrapper, QuizzEllipse, QuizzGroup4, QuizzTextWrapper3, StyledButton, StyledText } from '../../styles/quizz/QuizzStyledComponents';


type AlternativeComponentProps = {
    text: string;
    correto: boolean;
}

export const AlternativeComponent: React.FC<AlternativeComponentProps> = ({ text, correto }) => {
  return (
      <QuizzDivWrapper>
         
          <QuizzGroup4>
               <QuizzEllipse />
            <QuizzTextWrapper3>{text}</QuizzTextWrapper3>
           
          </QuizzGroup4>
           
        </QuizzDivWrapper>
  );
}; 
