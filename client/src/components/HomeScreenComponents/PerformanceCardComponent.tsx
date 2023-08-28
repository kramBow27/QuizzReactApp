import React from 'react';
import '../../styles/home/home-styles.css'  // Atualize este import para o caminho do seu arquivo de estilo, caso seja diferente
import { GoodResult, Group5, OverlapGroupWrapper, Group6, DivWrapper, TextWrapper3, TextWrapper4, ShareYour } from '../../styles/home/HomeStyledComponents';
interface PerformanceCardProps {
  performance: string;
}

export const PerformanceCardComponent: React.FC<PerformanceCardProps> = ({ performance }) => {
  return (
    <GoodResult>
      <Group5>
        <OverlapGroupWrapper>
          <DivWrapper>
            <TextWrapper3>{performance}</TextWrapper3>
          </DivWrapper>
        </OverlapGroupWrapper>
        <Group6>
          <TextWrapper4>Good Result!</TextWrapper4>
          <br />
          <br/>
          <ShareYour>
            Share your achievement
        
            with your friend
          </ShareYour>
        </Group6>
      </Group5>
    </GoodResult>
  );
};

export default PerformanceCardComponent;