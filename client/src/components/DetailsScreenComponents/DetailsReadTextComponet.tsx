import React from 'react';
import ReadingIcon from '../../assets/icons/reading.svg'
import speakingIcon from '../../assets/icons/speech.svg';


import '../../styles/home/home-styles.css'
import { DetailsReadText, DetailsP, DetailsGroup, DetailsGroup2, DetailsTextWrapper2, DetailsEllipse, DetailsGroup3, DetailsTextWrapper3, DetailsEllipse2, DetailsGroup4, DetailsEllipse3 } from '../../styles/details/DetailsStyledComponents';

export const DetailsReadTextComponent: React.FC = () => {
  return (
    
          <DetailsReadText>
            <DetailsP>
              Please read the text below carefully
              <br />
              so you can understand it
            </DetailsP>
            <DetailsGroup>
              <DetailsGroup2>
                    <DetailsEllipse/>
                <DetailsTextWrapper2>
                  10 point awarded for a correct answer and no
                  <br />
                  marks for a incorrect answer
                </DetailsTextWrapper2>
              
              </DetailsGroup2>
              <DetailsGroup2>
                  <DetailsEllipse />
                <DetailsTextWrapper2>Tap on options to select the correct answer</DetailsTextWrapper2>
                
              </DetailsGroup2>
              <DetailsGroup2>
                  <DetailsEllipse/>
                <DetailsTextWrapper2>
                  Click submit if you are sure you want to
                  <br />
                  complete all the quizzes
                </DetailsTextWrapper2>
                
              </DetailsGroup2>
            </DetailsGroup>
          </DetailsReadText>
          
  );
};

export default DetailsReadTextComponent;
