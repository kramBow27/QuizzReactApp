import React from 'react';
import '../../styles/home/home-styles.css'
import { Group18, Group19, Group20, Group21, Group23, Img, Rectangle3, RectangleWrapper, TextWrapper12, TextWrapper13 } from '../../styles/home/HomeStyledComponents';

type QuizCardProps = {
   icone: string;
  tema: string;
    progress: string;

};

const RecentQuizCard: React.FC<QuizCardProps> = ({ icone, tema, progress }) => {
  return (
     <Group18>
      <Group19>
        <Group20>
          <Group21>
      
                 <Img className="group-22" alt="Icon" src={icone} />
               
            
          </Group21>
        </Group20>
        <Group23>
          <TextWrapper12>{tema}</TextWrapper12>
          <TextWrapper13>{`You completed ${progress}`}</TextWrapper13>
        </Group23>
        <RectangleWrapper>
          <Rectangle3></Rectangle3>
        </RectangleWrapper>
      </Group19>
    </Group18>
  );
};

export default RecentQuizCard;
