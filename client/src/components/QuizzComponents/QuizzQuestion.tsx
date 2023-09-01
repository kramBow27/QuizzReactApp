import React, { useState } from 'react';
import '../../styles/home/home-styles.css'
import { QuizzDivWrapper, QuizzEllipse, QuizzGroup3, QuizzGroup4, QuizzGroup5, QuizzGroup6, QuizzGroup7, QuizzGroup8, QuizzGroupWrapper, QuizzOption, QuizzOverlapGroup, QuizzQuestion, QuizzQuestionText, QuizzRectangle, QuizzTextWrapper3 } from '../../styles/quizz/QuizzStyledComponents';
import { AlternativeComponent } from './AlternativeComponent';


type QuizzQuestionComponentProps = {
  showImage: boolean;
  pergunta: string;
  alternativas: any[]; // Substitua "any" pelo tipo real das suas alternativas
  onAnswerSelected: (answerId: any) => void;  // Substitua "any" pelo tipo real do seu ID de alternativa
};

export const QuizzQuestionComponent: React.FC<QuizzQuestionComponentProps> = ({ showImage, pergunta, alternativas, onAnswerSelected }) => {
   const [selectedAlternativeId, setSelectedAlternativeId] = useState(null);

  const handleSelect = (id: any) => {
    setSelectedAlternativeId(id);
    onAnswerSelected(id);
  };

  return (
    <QuizzQuestion>
      <QuizzQuestionText>{pergunta}</QuizzQuestionText>
      {showImage && <QuizzRectangle />}
      <QuizzOption>
        {alternativas.map((alt, index) => (
          <AlternativeComponent
            key={index}
            text={alt.alternativa_texto}
            correto={alt.correta}
            isSelected={alt.alternativa_id === selectedAlternativeId}
            onSelect={() => handleSelect(alt.alternativa_id)}
          />
        ))}
      </QuizzOption>
    </QuizzQuestion>
  );
};

//   <QuizzGroup3>
//             <QuizzTextWrapper3>Karate</QuizzTextWrapper3>
//             <QuizzEllipse />
// </QuizzGroup3>
//             <QuizzGroup4>
//             <QuizzTextWrapper3>Squash</QuizzTextWrapper3>
//             <QuizzOverlapGroup>
//             </QuizzOverlapGroup>
//           </QuizzGroup4>
 /* <QuizzGroupWrapper>
        Borda verde para questão correta
        </QuizzGroupWrapper> */