import React from "react";

import Header from "../components/QuizzComponents/Header";
import { QuizzDiv, QuizzIndex, QuizzContent, QuizzQuestion, QuizzQuestionText, QuizzRectangle, QuizzOption, QuizzGroupWrapper, QuizzTextWrapper3, QuizzEllipse, QuizzDivWrapper, QuizzGroup4, QuizzGroup5, QuizzGroup6, QuizzTextWrapper, QuizzOverlapGroup, QuizzGroup7, QuizzGroup8, QuizzProgress, QuizzRectangleWrapper, QuizzRectangle2, QuizzButton, QuizzNext, QuizzPrevious, QuizzOverlapGroup2Transparent, QuizzGroup3, QuizzTextWrapper4, QuizzTextWrapper6, QuizzOverlapGroup2 } from "../styles/quizz/QuizzStyledComponents";
import { TextWrapper5 } from "../styles/home/HomeStyledComponents";
import QuizzQuestionComponent from "../components/QuizzComponents/QuizzQuestion";
import QuizzProgressBarComponent from "../components/QuizzComponents/QuizzProgressBar";
import { CustomButton } from "../components/QuizzComponents/QuizzButton";
// interface QuizzScreenProps {
//   Tema: string;
//   pergunta: string;
//   showImage: boolean;
//   progresso: number;
// }

export const QuizzScreen : React.FC = () => {
  
 
    return (
     <QuizzIndex>
      <QuizzDiv>
          <Header Tema="História" />
          <QuizzProgressBarComponent progresso="75%"/>
        <QuizzContent>
            <QuizzQuestionComponent showImage={true} pergunta="The image below is a:" />
          
          </QuizzContent>
          <QuizzButton>
          <CustomButton text="Previous" textColor="#21bdca" borderColor="#21bdca" backgroundColor="#fafafa" />
            <CustomButton text="Next" textColor="#ffffff" borderColor="21bdca" backgroundColor="#21bdca" />
            </QuizzButton>
      </QuizzDiv>
    </QuizzIndex>
  );
};

