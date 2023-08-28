import React, { ReactNode } from 'react';
import starIcon from '../../assets/icons/star.svg'
import '../../styles/home/home-styles.css'
import { Element3, Frame, FrameWrapper, Group10, Group11, Group8, Group9, TextWrapper6, TextWrapper7, TextWrapper8 } from '../../styles/home/HomeStyledComponents';
type PopularQuizCardProps = {
  icone: string; // Alterado para apenas 'string', já que será a URL do ícone.
  nome: string;
   texto1: string;
   avaliacao: string;
  backgroundColor: string;
  borderRadius: string;
  height: string;
  width: string;

};

const QuizCard: React.FC<PopularQuizCardProps> = ({ icone, height, width, nome,  texto1,   avaliacao, backgroundColor, borderRadius  }) => {
  return (
    <Group8>

            <FrameWrapper backgroundColor={backgroundColor} borderRadius={borderRadius}>
        <Frame height={height} width={width} src={icone} alt="icon" /> {/* Icone como src aqui */}
            </FrameWrapper>
         
      <Group9>
        <TextWrapper6>{nome}</TextWrapper6>
        <TextWrapper7>{`${ texto1}`}</TextWrapper7>
      </Group9>
      <Group10>
        <Element3
          alt="Element"
          src={starIcon}
        />
        <TextWrapper8>{  avaliacao}</TextWrapper8>
      </Group10>
    </Group8>
  );
};

export default QuizCard;
