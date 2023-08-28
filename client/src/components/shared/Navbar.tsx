import React from 'react';
import '../../styles/home/home-styles.css';  // Atualize este import para o caminho do seu arquivo de estilo, caso seja diferente
import { Navbar, ElementWrapper, Element2, ImgWrapper, Group3, Group4 } from '../../styles/home/HomeStyledComponents';
export const NavbarComponent: React.FC = () => {
  return (
    <Navbar>
      <ElementWrapper>
        <Element2
          className="element-2"
          alt="Element"
          src="https://anima-uploads.s3.amazonaws.com/projects/64e2a09d2fd2ed85515d1f82/releases/64e4ea9b030914fbf1dff3ba/img/1.svg"
        />
      </ElementWrapper>
      <ImgWrapper>
        <Element2
          className="element-2"
          alt="Element"
          src="https://anima-uploads.s3.amazonaws.com/projects/64e2a09d2fd2ed85515d1f82/releases/64e4ea9b030914fbf1dff3ba/img/44.svg"
        />
      </ImgWrapper>
      <Group3>
        <Element2
          className="element-2"
          alt="Element"
          src="https://anima-uploads.s3.amazonaws.com/projects/64e2a09d2fd2ed85515d1f82/releases/64e4ea9b030914fbf1dff3ba/img/22.svg"
        />
      </Group3>
      <Group4>
        <Element2
          className="element-2"
          alt="Element"
          src="https://anima-uploads.s3.amazonaws.com/projects/64e2a09d2fd2ed85515d1f82/releases/64e4ea9b030914fbf1dff3ba/img/4.svg"
        />
      </Group4>
    </Navbar>
  );
};

export default Navbar;
