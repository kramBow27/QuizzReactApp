import React from 'react';
import sportsIcon from '../assets/icons/sports.svg'
import {  DetailsContent, DetailsDiv, DetailsIndex } from '../styles/details/DetailsStyledComponents';
import DetailsButtonComponent from '../components/DetailsScreenComponents/DetailsButton';
import DetailsReadTextComponent from '../components/DetailsScreenComponents/DetailsReadTextComponet';
import DetailsBriefExplanationComponent from '../components/DetailsScreenComponents/DetailsBriefExplanationComponent';
import DetailsTestThemeComponent from '../components/DetailsScreenComponents/DetailsTestThemeComponent';
import DetailsHeaderComponent from '../components/DetailsScreenComponents/DetailsHeaderComponent';
import PopularQuizCard from '../components/HomeScreenComponents/QuizCard';


export const DetailsScreen : React.FC= () => {
  return (
  <DetailsIndex>
          <DetailsDiv>
              
        <DetailsContent>
       <DetailsHeaderComponent/>
              <PopularQuizCard width="2rem" height="2rem" borderRadius="10px" backgroundColor="#F0F5FC" icone={sportsIcon} nome="Sports" texto1="10 questions" avaliacao="4.8" />

            
              <DetailsBriefExplanationComponent />
              <DetailsReadTextComponent />
                    <DetailsButtonComponent />
         

        </DetailsContent>
       
      </DetailsDiv>
    </DetailsIndex>
  );
};
