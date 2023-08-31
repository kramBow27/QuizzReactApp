import React from 'react';
import sportsIcon from '../assets/icons/sports.svg'
import {  DetailsContent, DetailsDiv, DetailsIndex } from '../styles/details/DetailsStyledComponents';
import DetailsButtonComponent from '../components/DetailsScreenComponents/DetailsButton';
import DetailsReadTextComponent from '../components/DetailsScreenComponents/DetailsReadTextComponet';
import DetailsBriefExplanationComponent from '../components/DetailsScreenComponents/DetailsBriefExplanationComponent';
import DetailsTestThemeComponent from '../components/DetailsScreenComponents/DetailsTestThemeComponent';
import DetailsHeaderComponent from '../components/DetailsScreenComponents/DetailsHeaderComponent';
import PopularQuizCard from '../components/HomeScreenComponents/QuizCard';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/store';


export const DetailsScreen: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme);
  console.log("TEMA", theme)
  
  return (
  <DetailsIndex>
          <DetailsDiv>
              
        <DetailsContent>
       <DetailsHeaderComponent/>
              <PopularQuizCard width="2rem" height="2rem" borderRadius="10px" backgroundColor="#F0F5FC" icone={theme.icone} nome={theme.tema_nome} texto1="10 questions" avaliacao="4.8" />

            
              <DetailsBriefExplanationComponent />
              <DetailsReadTextComponent />
                    <DetailsButtonComponent temaId={theme && theme.tema_id ? theme.tema_id.toString() : ''}/>
         

        </DetailsContent>
       
      </DetailsDiv>
    </DetailsIndex>
  );
};
