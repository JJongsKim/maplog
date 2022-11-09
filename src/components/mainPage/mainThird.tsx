import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as UpArrow } from '../../assets/UpArrow.svg';

const MainThird = () => {
  const navigate = useNavigate();

  const goSignUp = () => {
    navigate('/sign-up');
  };

  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MainWrap>
      <MainContainer>
        <ContentBox>함께하러 갈래요?</ContentBox>
        <GoSignUpBtn onClick={goSignUp}>맵로그 가입하러 가기</GoSignUpBtn>
      </MainContainer>
      <UpArrowStyle onClick={moveToTop} />
    </MainWrap>
  );
};

const MainWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1512px;
  height: 982px;
  background-color: ${({ theme }) => theme.colors.primary.babypink};
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentBox = styled.div`
  margin: 0;
  padding: 50px 0;
  width: 712px;
  height: 155px;
  border-radius: 15px;
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.text};
`;

const GoSignUpBtn = styled.button`
  margin-top: 70px;
  padding: 17px 0;
  width: 550px;
  height: 80px;
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  font-size: 35px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.primary.pink};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

const UpArrowStyle = styled(UpArrow)`
  position: absolute;
  right: 120px;
  bottom: 74px;
  cursor: pointer;
`;

export default MainThird;
