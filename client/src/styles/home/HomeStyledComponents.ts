import styled from 'styled-components';

export const Index = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Div = styled(Index)`
  background-color: #ffffff;
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;  // Adicionado
  justify-content: space-between;  // Adicionado
margin-top: 1rem;
  background-color: transparent;
  height: 40px;
  width: 327px;
  position: relative; 
`;

export const Group = styled.div`
  display: flex;
    justify-content: space-between;  
 align-items: center;
  justify-content: flex-start;
  height: 40px;
  width: auto;
`;

export const Ellipse = styled(Index)`
  background-color: #c4c4c4;
  border-radius: 20px;
  height: 40px;
  width: 40px;
`;

export const EllispseImg = styled.img`
  border-radius: 20px;
  height: 40px;
  width: 40px;
  object-fit: cover;
   margin-right: 25px; 
`;

export const Group2 = styled.div`
    display: flex;  // Use flexbox para alinhar os elementos horizontalmente
    align-items: center;// Alinhe os elementos verticalmente no centro
`;

export const TextWrapper = styled.span`  // Alterei para 'span' para torná-lo inline
    color: #999999;
    font-family: "Montserrat-Medium", Helvetica;
    font-size: 16px;
    font-weight: 500;
    margin-right: 5px;  // Adicionado margem à direita para algum espaço entre os textos
`;

export const TextWrapper2 = styled.span`  // Alterei para 'span' para torná-lo inline
    color: #333333;
    font-family: "Montserrat", Helvetica;
    font-size: 16px;
    font-weight: 600;
`;



export const Element = styled(Index)`
align-items: center;
  height: 24px;
  width: 24px;
`;

export const OverlapGroup = styled(Index)`
  height: 22px;
  left: 2px;
  position: relative;
  margin-top: 7px;
  width: 20px;
`;

export const Img = styled.img`
  height: 20px;
  width: 20px;
`;

export const Ellipse2 = styled(Index)`
  background-color: #ff6967;
  border: 1.5px solid #ffffff;
  border-radius: 4px;
  height: 8px;
  left: 11px;
  position: absolute;
  top: 0;
  width: 8px;
`;

export const Overlap = styled(Index)`
  height: 697px;
  left: 0;
  position: relative;
  top: 1.7rem;
  width: 376px;
`;

export const Navbar = styled(Index)`
  height: 70px;
  left: 0;
  position: absolute;
  top: 627px;
  width: 376px;
`;

export const ElementWrapper = styled(Index)`
  background-color: #ffffff;
  box-shadow: 10px -5px 20px #0000000d;
  height: 70px;
  left: 0;
  position: absolute;
  top: 0;
  width: 94px;
`;

export const Element2 = styled.img`
  height: 24px;
  left: 35px;
  position: absolute;
  top: 23px;
  width: 24px;
`;

export const ImgWrapper = styled(Index)`
  background-color: #ffffff;
  box-shadow: 10px -5px 20px #0000000d;
  height: 70px;
  left: 94px;
  position: absolute;
  top: 0;
  width: 94px;
`;

export const Group3 = styled(Index)`
  background-color: #ffffff;
  box-shadow: 10px -5px 20px #0000000d;
  height: 70px;
  left: 188px;
  position: absolute;
  top: 0;
  width: 94px;
`;

export const Group4 = styled(Index)`
  background-color: #ffffff;
  box-shadow: 10px -5px 20px #0000000d;
  height: 70px;
  left: 282px;
  position: absolute;
  top: 0;
  width: 94px;
`;

export const Content = styled(Index)`
  height: 674px;
  left: 24px;
  position: absolute;
  top: 0;
  width: 327px;
`;

export const GoodResult = styled(Index)`
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64e2a09d2fd2ed85515d1f82/releases/64e4ea9b030914fbf1dff3ba/img/mask-group@2x.png);
  background-size: 100% 100%;
  height: 112px;
  left: 0;
  position: relative;
  top: 0;
  width: 327px;
`;

export const Group5 = styled.div`
  position: absolute;  // Mudado para absoluto
  top: 16px;
  left: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 233px;
`;

export const OverlapGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const DivWrapper = styled(Index)`
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64e2a09d2fd2ed85515d1f82/releases/64e4ea9b030914fbf1dff3ba/img/ellipse-10.svg);
  background-size: 100% 100%;
  border: 10px solid #fafafa;
  border-radius: 40px;
  height: 80px;
  justify-content:center;
  align-items:center;

  width: 80px;
`;

export const TextWrapper3 = styled(Index)`
  color: #4e5c66;
  font-family: "Montserrat", Helvetica;
  font-size: 14px;
  font-weight: 600;
  
  letter-spacing: 0;
  line-height: normal;
 
  
  white-space: nowrap;
  width: 29px;
`;

export const Group6 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
 

`;

export const TextWrapper4 = styled(Index)`
  color: #4d5b66;
  margin-bottom: 0.4rem;
  font-family: "Montserrat-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  background-color: transparent;
  letter-spacing: 0;
  line-height: normal;


`;

export const Group23 = styled.div`
    height: 42px;
    left: 0;

    position: relative;
   top:0.8rem;
   left: 0.34rem;
    width: 123px;`


export const TextWrapper12 = styled.div`
  color: #333333;
    font-family: "Montserrat", Helvetica;
    font-size: 14px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 0;
`

export const TextWrapper13 = styled.div`

  color: #999999;
    font-family: "Nunito", Helvetica;
    font-size: 12px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 26px;
    width: 119px;
`

export const RectangleWrapper = styled.div`
background-color: #f2f2f2;
    border-radius: 10px;
    height: 6px;
    left: 2px;
    position: absolute;
    top: 114px;
    width: 121px;
`

export const Rectangle3 = styled.div`
 background-color: #5372e7;
    border-radius: 10px;
    height: 6px;
    width: 85px;
`
export const ShareYour = styled(Index)`
  color: #4e5c66;
  font-family: "Nunito", Helvetica;
  font-size: 12px;
  font-weight: 400;
  background-color: transparent;
  letter-spacing: 0;
  line-height: 15px;

 
`;
export const PopularQuiz = styled(Index)`
  height: 312px;
  left: 0;
  position: relative;
  top: 1.7rem;
  width: 329px;
`;

export const TextWrapper5 = styled(Index)`
  color: #999999;
  font-family: "Montserrat", Helvetica;
  font-size: 14px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0.8rem;
  width: 94px;
`;

export const Group7 = styled(Index)`
  display: flex;
  flex-direction: column;
   margin-top: 2.3rem;
  width: 327px;
`;



export const Group8 = styled(Index)`
  display: flex;
flex-direction: row;

  align-items: center; // Isso centralizará os itens verticalmente
  background-color: #ffffff;
  border-radius: 10px;
 box-shadow: 0px 0px 8px rgba(51, 51, 51, 0.02);
position: relative;
  height: 82px;
  width: 327px;
  margin-bottom: 0.3rem; // Adicione margem para separar cada cartão na lista
`;
export const FrameWrapper = styled.div<{ backgroundColor: string, borderRadius: string, }>`

  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius};
  box-shadow: 0px 0px 15px rgba(51, 51, 51, 0.03);
  height: 2.4rem;
  width: 2.4rem;
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 1rem;
  justify-content: center;
`;

export const Frame = styled.img<{height: string, width: string}>`
  height: ${props => props.height};
  position: absolute;
  fill: blue;
  width: ${props => props.width};
`;

export const Group9 = styled.div`
 display: flex;
  flex-direction: column;
  margin-left: 1rem;
  align-items: flex-start;
  text-align:left;
`;

export const TextWrapper6 = styled.div`
  color:  rgba(51, 51, 51, 1);
  font-family: "Montserrat", Helvetica;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
 align-self: flex-start;
 margin-left: 0.2rem;
  letter-spacing: 0;
  line-height: normal;
text-align: left; 
 white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: auto;
`;

export const TextWrapper7 = styled.div`
  color: #333333;
  font-family: "Nunito", Helvetica;
  font-size: 12px;
   margin-left: 0.2rem;
  font-weight: 400;
  flex-direction: row;
 align-self: flex-start;
  letter-spacing: 0;
  line-height: normal;
text-align: left; 
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0.3rem;
  width: auto;
`;

export const Group10 = styled(Index)`
display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  width: auto;
  margin-right: 1rem;
`;

export const TextWrapper8 = styled(Index)`
  color: #333333;
  font-family: "Nunito", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  width: auto;  // ajustado para auto
 
`;

export const Element3 = styled.img`
  height: 20px;

  width: 20px;
`;



export const Group11 = styled(Index)`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 10px 24px 54px #33333308;
  height: 82px;
  left: 0;
  position: absolute;
  top: 98px;
  width: 327px;
`;

export const Overlap2 = styled(Index)`
  background-color: #e9eeff;
  border-radius: 10px;
  height: 50px;
  left: 16px;
  position: absolute;
  top: 16px;
  width: 50px;
`;

export const GroupWrapper = styled(Index)`
  height: 32px;
  left: 9px;
  position: relative;
  top: 9px;
  width: 32px;
`;

export const Group12 = styled(Index)`
  border: 1.5px solid;
  border-color: #5372e7;
  border-radius: 13px;
  height: 26px;
  left: 3px;
  position: relative;
  top: 3px;
  width: 26px;
`;

export const OverlapGroup2 = styled(Index)`
  height: 25px;
  position: relative;
  top: 1px;
`;

export const Polygon = styled(Index)`
  height: 8px;
  left: 9px;
  position: absolute;
  top: 8px;
  width: 8px;
`;

export const Group13 = styled(Index)`
  height: 25px;
  left: 0;
  position: absolute;
  top: 0;
  width: 26px;
`;

export const Vector = styled(Index)`
  height: 6px;
  left: 12px;
  position: absolute;
  top: 4px;
  width: 2px;
`;

export const Vector2 = styled(Index)`
  height: 3px;
  left: 16px;
  position: absolute;
  top: 9px;
  width: 6px;
`;

export const Vector3 = styled(Index)`
  height: 5px;
  left: 15px;
  position: absolute;
  top: 16px;
  width: 4px;
`;

export const Vector4 = styled(Index)`
  height: 5px;
  left: 7px;
  position: absolute;
  top: 15px;
  width: 4px;
`;

export const Vector5 = styled(Index)`
  height: 3px;
  left: 4px;
  position: absolute;
  top: 9px;
  width: 6px;
`;

export const Group14 = styled(Index)`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 10px 24px 54px #33333308;
  height: 82px;
  left: 0;
  position: absolute;
  top: 0;
  width: 327px;
`;

export const Overlap3 = styled(Index)`
  height: 50px;
  left: 16px;
  position: absolute;
  top: 16px;
  width: 155px;
`;

export const Rectangle = styled(Index)`
  background-color: #ffe2be;
  border-radius: 10px;
  box-shadow: var(--1);
  height: 50px;
  left: 0;
  position: absolute;
  top: 0;
  width: 50px;
`;

export const Group15 = styled(Index)`
  height: 42px;
  left: 9px;
  position: absolute;
  top: 4px;
  width: 146px;
`;

export const Frame2 = styled(Index)`
  height: 32px;
  left: 0;
  position: absolute;
  top: 5px;
  width: 32px;
`;

export const Group16 = styled(Index)`
  height: 18px;
  left: 4px;
  position: relative;
  top: 7px;
  width: 24px;
`;

export const Vector6 = styled(Index)`
  height: 15px;
  left: 1px;
  position: absolute;
  top: -1px;
  width: 22px;
`;

export const Rectangle2 = styled(Index)`
  background-color: #ff9f24;
  border-radius: 1px;
  height: 2px;
  left: 0;
  position: absolute;
  top: 16px;
  width: 24px;
`;

export const TextWrapper9 = styled(Index)`
  color: #333333;
  font-family: "Montserrat", Helvetica;
  font-size: 14px;
  font-weight: 600;
  left: 57px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 85px;
`;

export const TextWrapper10 = styled(Index)`
  color: #999999;
  font-family: "Nunito", Helvetica;
  font-size: 12px;
  font-weight: 400;
  left: 57px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 26px;
  width: 71px;
`;

export const RecentQuiz = styled(Index)`
  height: 186px;
  left: 0;
  position: relative;
  top: 1.7rem;
  width: 328px;
`;

export const TextWrapper11 = styled(Index)`
  color: #999999;
  font-family: "Montserrat", Helvetica;
  font-size: 14px;
  font-weight: 600;
  left: 0;
 align-self: flex-start;

  letter-spacing: 0;
  line-height: normal;
 margin-bottom:1rem;
  top: 0;
  width: 88px;
`;

export const Group17 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Group18 = styled(Index)`
  background-color: #fafafc;
  border-radius: 10px;
  height: 152px;
position:relative;
display:flex;
  top: 0;
     justify-content: center; 
  align-items: center; 
  width: 155px;
`;

export const Group19 = styled(Index)`
  height: 120px;
  left: 16px;
    align-items: center; 
    background-color: transparent;
  position: absolute;
  top: 16px;
  width: 123px;
`;

export const Group20 = styled(Index)`
  background-color: #E8E8F8;
  border-radius: 10px;
   box-shadow: 0px 0px 5px rgba(51, 51, 51, 0.02);
  height: 40px;
  left: 0;
   justify-content: center;  
     align-items: center; 

  margin-top: 0.3rem;
  width: 40px;
`;

export const Group21 = styled(Index)`
  height: 24px;
  left: 8px;
background-color: #E8E8F8;
  top: 8px;
  width: 24px;
`;

export const Group22 = styled(Index)`
  height: 17px;
  left: 2px;
  
  top: 3px;
  width: 20px;
`;