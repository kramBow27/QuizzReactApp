import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setQuestionData } from '../../store/questionSlice';
import { DetailsButton, DetailsOverlapGroup, DetailsTextWrapper } from '../../styles/details/DetailsStyledComponents';
import '../../styles/home/home-styles.css';
import { useNavigate } from 'react-router-dom';

type CustomButtonProps = {
  temaId: string;
};

export const DetailsButtonComponent: React.FC<CustomButtonProps> = ({ temaId }) => {
  const dispatch = useDispatch();
const navigate = useNavigate();
  const handleGetStarted = () => {
    axios.get(`http://localhost:3000/questions/${temaId}`)
      .then(response => {
        if (response.status === 200) {
          dispatch(setQuestionData(response.data.questions));
          console.log("QUESTIONS", response.data.questions)
          navigate('/quizz')
        }
      })
      .catch(error => {
        console.error('Ocorreu um erro na requisição:', error);
      });
  };

  return (
    <DetailsButton onClick={handleGetStarted}>
      <DetailsOverlapGroup>
        <DetailsTextWrapper>Get Started</DetailsTextWrapper>
      </DetailsOverlapGroup>
    </DetailsButton>
  );
};

export default DetailsButtonComponent;
