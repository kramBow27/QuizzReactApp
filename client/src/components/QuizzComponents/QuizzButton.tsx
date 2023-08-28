import React from 'react';
import { StyledButton, StyledText } from '../../styles/quizz/QuizzStyledComponents';


type CustomButtonProps = {
  backgroundColor: string;
  borderColor: string;
  text: string;
  textColor: string;
};

export const CustomButton: React.FC<CustomButtonProps> = ({ backgroundColor, borderColor, text, textColor }) => {
  return (
    <StyledButton backgroundColor={backgroundColor} borderColor={borderColor}>
      <StyledText textColor={textColor}>{text}</StyledText>
    </StyledButton>
  );
};