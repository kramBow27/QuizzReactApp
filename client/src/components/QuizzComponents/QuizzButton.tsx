import React from 'react';
import { StyledButton, StyledText } from '../../styles/quizz/QuizzStyledComponents';


type CustomButtonProps = {
  backgroundColor: string;
  borderColor: string;
  text: string;
  textColor: string;
  onClick: () => void;
};

export const CustomButton: React.FC<CustomButtonProps> = ({ onClick, backgroundColor, borderColor, text, textColor }) => {
  return (
    <StyledButton  onClick={onClick} backgroundColor={backgroundColor} borderColor={borderColor}>
      <StyledText textColor={textColor}>{text}</StyledText>
    </StyledButton>
  );
};