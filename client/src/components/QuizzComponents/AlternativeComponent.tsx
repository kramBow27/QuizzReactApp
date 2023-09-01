import React, { useState } from 'react';
import { QuizzDivWrapper, QuizzEllipse, QuizzGroup4, QuizzTextWrapper3, StyledButton, StyledText } from '../../styles/quizz/QuizzStyledComponents';


type AlternativeComponentProps = {
    text: string;
  correto: boolean;
  onSelect: () => void;
  isSelected: boolean;
}

export const AlternativeComponent: React.FC<AlternativeComponentProps> = ({ text, onSelect }) => {
    const [isSelected, setIsSelected] = useState(false);

 const onSelected = () => {
    setIsSelected(!isSelected);
    onSelect();
  };


  return (
    <QuizzDivWrapper selected={isSelected} onClick={onSelected}>
      <QuizzGroup4 selected={isSelected}>
        <QuizzEllipse selected={isSelected} />
        <QuizzTextWrapper3 selected={isSelected}>{text}</QuizzTextWrapper3>
      </QuizzGroup4>
    </QuizzDivWrapper>
  );
}; 
