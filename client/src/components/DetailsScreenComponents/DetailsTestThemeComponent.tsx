import React from 'react';
import sportsIcon from '../../assets/icons/sports.svg'



import {  DetailsElement, DetailsElement2, DetailsFrame, DetailsGroup10, DetailsGroup11, DetailsOverlap, DetailsOverlapGroup2, DetailsOverlapGroupWrapper, DetailsTestTheme, DetailsTextWrapper7, DetailsTextWrapper8, DetailsTextWrapper9 } from '../../styles/details/DetailsStyledComponents';

export const DetailsTestThemeComponent: React.FC = () => {
  return (
    
        <DetailsTestTheme>
            <DetailsOverlap>
           
                
                
                                      <DetailsElement
                                          alt="Element"
                                          src={sportsIcon} />
                  
                
          
            </DetailsOverlap>
            <DetailsGroup10>
              <DetailsTextWrapper7>Sport</DetailsTextWrapper7>
              <DetailsTextWrapper8>10 Question</DetailsTextWrapper8>
            </DetailsGroup10>
            <DetailsGroup11>
              <DetailsElement2
                alt="Element"
                src="https://anima-uploads.s3.amazonaws.com/projects/64e2a09d2fd2ed85515d1f82/releases/64e2a0bd884b9ec187660a52/img/36.svg"
              />
              <DetailsTextWrapper9>4.8</DetailsTextWrapper9>
            </DetailsGroup11>
          </DetailsTestTheme>
          
  );
};

export default DetailsTestThemeComponent;

