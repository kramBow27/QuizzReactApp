import React from 'react';

import { DetailsButton, DetailsOverlapGroup, DetailsTextWrapper } from '../../styles/details/DetailsStyledComponents';
import '../../styles/home/home-styles.css'// Substitua pelo caminho real para o seu componente

export const DetailsButtonComponent: React.FC = () => {
  return (

          <DetailsOverlapGroup>
            <DetailsTextWrapper>Get Started</DetailsTextWrapper>
          </DetailsOverlapGroup>
       
  );
};

export default DetailsButtonComponent;  
