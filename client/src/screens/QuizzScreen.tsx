import React from "react";

import Header from "../components/QuizzComponents/Header";
import { QuizzDiv, QuizzIndex, QuizzContent, QuizzQuestion, QuizzQuestionText, QuizzRectangle, QuizzOption, QuizzGroupWrapper, QuizzTextWrapper3, QuizzEllipse, QuizzDivWrapper, QuizzGroup4, QuizzGroup5, QuizzGroup6, QuizzTextWrapper, QuizzOverlapGroup, QuizzGroup7, QuizzGroup8, QuizzProgress, QuizzRectangleWrapper, QuizzRectangle2, QuizzButton, QuizzNext, QuizzPrevious, QuizzOverlapGroup2Transparent, QuizzGroup3, QuizzTextWrapper4, QuizzTextWrapper6, QuizzOverlapGroup2 } from "../styles/quizz/QuizzStyledComponents";
import { TextWrapper5 } from "../styles/home/HomeStyledComponents";
import { QuizzQuestionComponent } from "../components/QuizzComponents/QuizzQuestion";
import QuizzProgressBarComponent from "../components/QuizzComponents/QuizzProgressBar";
import { CustomButton } from "../components/QuizzComponents/QuizzButton";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
// interface QuizzScreenProps {
//   Tema: string;
//   pergunta: string;
//   showImage: boolean;
//   progresso: number;
// }

export const QuizzScreen : React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(0);

 const [userAnswers, setUserAnswers] = useState<any[]>([]);
  const questions = useSelector((state: RootState) => state.question); // Acesse as perguntas do estado do Redux
const theme = useSelector((state: RootState) => state.theme);
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
     
    setProgress(progress + 10);
    } else {
    
      let score = 0;
      for (let i = 0; i < questions.length; i++) {
        const correctAnswer = questions[i].alternativas.find(alt => alt.correta);
        if (correctAnswer && userAnswers[i] === correctAnswer.alternativa_id) {
           console.log('Correto');
          score++;
        } else {
    console.log('Errado');
  }

      }
      console.log('Sua pontuação é:', score);
    }
    
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswerSelection = (answerId: any) => { 
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = answerId;
    setUserAnswers(updatedAnswers);
  };

  const currentQuestion = questions[currentQuestionIndex];
    return (
     <QuizzIndex>
      <QuizzDiv>
          <Header Tema={theme.tema_nome} />
          <QuizzProgressBarComponent progresso={`${progress}`} />
        <QuizzContent>
               <QuizzQuestionComponent 
          showImage={currentQuestion?.contem_imagem || false} 
          pergunta={currentQuestion?.pergunta_texto || ''}
              alternativas={currentQuestion?.alternativas || []}
              onAnswerSelected={handleAnswerSelection}
        />
          
          </QuizzContent>
          <QuizzButton>
          <CustomButton onClick={previousQuestion} text="Previous" textColor="#21bdca" borderColor="#21bdca" backgroundColor="#fafafa" />
            <CustomButton  onClick={nextQuestion} text="Next" textColor="#ffffff" borderColor="21bdca" backgroundColor="#21bdca" />
            </QuizzButton>
      </QuizzDiv>
    </QuizzIndex>
  );
};

