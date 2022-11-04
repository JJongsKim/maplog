import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Layout from '../../components/layout';

const MaplogMain = () => {
  const navigate = useNavigate();
  const goWritingLog = () => {
    navigate('/writing-log');
  };

  return (
    <Layout>
      <MainWrap>
        <ContentContainer>
          <UserWelcomeContent>
            <UserNameWrap>홍길동</UserNameWrap>
            <WelcomeWrap>님 반가워요 !</WelcomeWrap>
          </UserWelcomeContent>
          <SelectContent>오늘은 어떤 작업을 하시겠어요 ?</SelectContent>
          <MenuContainer>
            <MenuSet>
              <MenuImage>📂</MenuImage>
              <MenuBtn>내 로그 모아보기</MenuBtn>
            </MenuSet>
            <MenuSet>
              <MenuImage>🗺</MenuImage>
              <MenuBtn>로그지도 보러가기</MenuBtn>
            </MenuSet>
            <MenuSet>
              <MenuImage>📝</MenuImage>
              <MenuBtn onClick={goWritingLog}>로그 작성하기</MenuBtn>
            </MenuSet>
          </MenuContainer>
        </ContentContainer>
      </MainWrap>
    </Layout>
  );
};

const MainWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 1512px;
  height: 982px;
  background-color: ${({ theme }) => theme.colors.primary.babypink};
`;

const ContentContainer = styled.div`
  width: 1100px;
  height: 740px;
  margin-top: 180px;
  padding: 55px 80px 0;
  background-color: #fff;
`;

const UserWelcomeContent = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

const UserNameWrap = styled.p`
  margin: 0;
  font-size: 45px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const WelcomeWrap = styled.p`
  margin-left: 10px;
  font-size: 35px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const SelectContent = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  user-select: none;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 95px;
  user-select: none;
`;

const MenuSet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuImage = styled.p`
  margin: 0;
  font-size: 190px;

  &:hover {
    transform: translateY(-20px);
    transition: all 0.9s linear;
  }
`;

const MenuBtn = styled.button`
  width: 190px;
  height: 55px;
  font-size: 24px;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary.pink};
  cursor: pointer;
`;

export default MaplogMain;
