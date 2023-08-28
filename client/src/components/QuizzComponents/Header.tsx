import React, { useEffect, useState } from 'react';
import '../../styles/quizz/quizz-styles.css'
import menuIcon from '../../assets/icons/three-dots.svg'
import arrowBack from '../../assets/icons/arrow-back.svg'
import { QuizzElement, QuizzGroup, QuizzGroup2, QuizzHeader, QuizzImg, QuizzTextWrapper2 } from '../../styles/quizz/QuizzStyledComponents';
import { DetailsElement3, DetailsHeader, DetailsTextWrapper10 } from '../../styles/details/DetailsStyledComponents';

interface HeaderComponentProps {
  Tema: string;

}

const Header: React.FC<HeaderComponentProps> = ({ Tema }) => {
    const [HorarioAtual, setHorarioAtual] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const time = `${date.getMinutes()}:${date.getSeconds()}`;
      setHorarioAtual(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <DetailsHeader>
      <DetailsElement3
              src={arrowBack}
            />
      <DetailsTextWrapper10>{Tema}</DetailsTextWrapper10>
      <QuizzGroup>
        <QuizzGroup2>
            <QuizzImg
            alt="Element"
            src="https://anima-uploads.s3.amazonaws.com/projects/64e2a09d2fd2ed85515d1f82/releases/64e4eadd2340cba66b90f198/img/12.svg"
          />
          <QuizzTextWrapper2>{HorarioAtual}</QuizzTextWrapper2>
        </QuizzGroup2>
      </QuizzGroup>
    </DetailsHeader>
  );
};

export default Header;
