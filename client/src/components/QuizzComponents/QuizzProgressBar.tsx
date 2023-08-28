import React from 'react';
import '../../styles/home/home-styles.css'
import { QuizzProgress, QuizzRectangle2, QuizzRectangleWrapper, QuizzTextWrapper4 } from '../../styles/quizz/QuizzStyledComponents';


type QuizzProgressBarComponentProps = {
    progresso: string;
};

const QuizzProgressBarComponent: React.FC<QuizzProgressBarComponentProps> = ({ progresso }) => {
  return (
    <QuizzProgress>
            <QuizzRectangleWrapper>
              <QuizzRectangle2 />
            </QuizzRectangleWrapper>
            <QuizzTextWrapper4>Completed {progresso}%</QuizzTextWrapper4>
          </QuizzProgress>
  );
};

export default QuizzProgressBarComponent;
