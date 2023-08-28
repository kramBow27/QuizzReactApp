import React from 'react';
import '../../styles/home/home-styles.css'
import { QuizzDivWrapper, QuizzEllipse, QuizzGroup3, QuizzGroup4, QuizzGroup5, QuizzGroup6, QuizzGroup7, QuizzGroup8, QuizzGroupWrapper, QuizzOption, QuizzOverlapGroup, QuizzQuestion, QuizzQuestionText, QuizzRectangle, QuizzTextWrapper3 } from '../../styles/quizz/QuizzStyledComponents';
import { AlternativeComponent } from './AlternativeComponent';


type QuizzQuestionComponentProps = {
    showImage: boolean;
    pergunta: string;
};

const QuizzQuestionComponent: React.FC<QuizzQuestionComponentProps> = ({ showImage, pergunta }) => {
  return (
    <QuizzQuestion>
      <QuizzQuestionText>
        {pergunta}
      </QuizzQuestionText>
      {showImage && <QuizzRectangle />}
      <QuizzOption>    
       
          <AlternativeComponent text="Footbal" correto={true}/>
       <AlternativeComponent text="Basketball" correto={false}/>
       <AlternativeComponent text="Volleyball" correto={false}/>
  <AlternativeComponent text="Squatch" correto={false}/>
      </QuizzOption>
    </QuizzQuestion>
  );
};

export default QuizzQuestionComponent;

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