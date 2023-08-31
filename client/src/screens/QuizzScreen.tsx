import React from "react";

import Header from "../components/QuizzComponents/Header";
import { QuizzDiv, QuizzIndex, QuizzContent, QuizzQuestion, QuizzQuestionText, QuizzRectangle, QuizzOption, QuizzGroupWrapper, QuizzTextWrapper3, QuizzEllipse, QuizzDivWrapper, QuizzGroup4, QuizzGroup5, QuizzGroup6, QuizzTextWrapper, QuizzOverlapGroup, QuizzGroup7, QuizzGroup8, QuizzProgress, QuizzRectangleWrapper, QuizzRectangle2, QuizzButton, QuizzNext, QuizzPrevious, QuizzOverlapGroup2Transparent, QuizzGroup3, QuizzTextWrapper4, QuizzTextWrapper6, QuizzOverlapGroup2 } from "../styles/quizz/QuizzStyledComponents";
import { TextWrapper5 } from "../styles/home/HomeStyledComponents";
import QuizzQuestionComponent from "../components/QuizzComponents/QuizzQuestion";
import QuizzProgressBarComponent from "../components/QuizzComponents/QuizzProgressBar";
import { CustomButton } from "../components/QuizzComponents/QuizzButton";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/store";
// interface QuizzScreenProps {
//   Tema: string;
//   pergunta: string;
//   showImage: boolean;
//   progresso: number;
// }

export const QuizzScreen : React.FC = () => {
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Começa com a primeira pergunta

  const questions = useSelector((state: RootState) => state.question); // Acesse as perguntas do estado do Redux

  const currentQuestion = questions[currentQuestionIndex]; // Obter a pergunta atual

  // Funções para navegar entre as perguntas
  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };


 
    return (
     <QuizzIndex>
      <QuizzDiv>
          <Header Tema="História" />
          <QuizzProgressBarComponent progresso="75%"/>
        <QuizzContent>
               <QuizzQuestionComponent 
          showImage={currentQuestion?.contem_imagem || false} 
          pergunta={currentQuestion?.pergunta_texto || ''}
          alternativas={currentQuestion?.alternativas || []}
        />
          
          </QuizzContent>
          <QuizzButton>
          <CustomButton onClick={goToPreviousQuestion} text="Previous" textColor="#21bdca" borderColor="#21bdca" backgroundColor="#fafafa" />
            <CustomButton  onClick={goToNextQuestion} text="Next" textColor="#ffffff" borderColor="21bdca" backgroundColor="#21bdca" />
            </QuizzButton>
      </QuizzDiv>
    </QuizzIndex>
  );
};

