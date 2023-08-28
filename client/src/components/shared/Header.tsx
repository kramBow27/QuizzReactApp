import React from 'react';
import '../../styles/home/home-styles.css'
import { Header, Group, EllispseImg, Group2, Img, TextWrapper, TextWrapper2, Element, OverlapGroup, Ellipse2 } from '../../styles/home/HomeStyledComponents';
interface HeaderProps {
  imagem1: string;
  nome: string;

  imagem2: string;
}

export const HeaderComponent: React.FC<HeaderProps> = ({ imagem1, nome,  imagem2 }) => {
  return (
   <Header>
      <Group>
        <EllispseImg src={imagem1} alt={`${nome} `} />
        <Group2>
          <TextWrapper>Hello,</TextWrapper>
          <TextWrapper2 className="text-wrapper-2">{`${nome} `}</TextWrapper2>
        </Group2>
      </Group>
      <Element>
        <OverlapGroup>
          <Img className="img" alt="Group" src={imagem2} />
          <Ellipse2 />
        </OverlapGroup>
      </Element>
    </Header>
  );
};

export default HeaderComponent;

//https://randomuser.me/api/portraits/women/72.jpg
// https://anima-uploads.s3.amazonaws.com/projects/64e2a09d2fd2ed85515d1f82/releases/64e4ea9b030914fbf1dff3ba/img/group@2x.png