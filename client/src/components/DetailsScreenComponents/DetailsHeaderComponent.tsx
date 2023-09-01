import React from 'react';
import menuIcon from '../../assets/icons/three-dots.svg'
import arrowBack from '../../assets/icons/arrow-back.svg'
import {  DetailsElement3, DetailsEllipse4, DetailsEllipse5, DetailsEllipse6, DetailsFrame2, DetailsGroup12, DetailsGroup13, DetailsHeader,  DetailsTextWrapper10, MenuIcon } from '../../styles/details/DetailsStyledComponents';
import '../../styles/home/home-styles.css'

export const DetailsHeaderComponent: React.FC = () => {
  return (
<DetailsHeader>
          <DetailsGroup12>
            <DetailsElement3
              src={arrowBack}
            />
            <DetailsTextWrapper10>Detail Quiz</DetailsTextWrapper10>
          </DetailsGroup12>
          <DetailsFrame2>
            <DetailsGroup13>
          <MenuIcon src={menuIcon}/>
            </DetailsGroup13>
          </DetailsFrame2>
        </DetailsHeader>
  );
};

export default DetailsHeaderComponent;  
 
