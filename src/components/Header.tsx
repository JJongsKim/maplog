import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const goSignIn = () => {
    navigate('/sign-in');
  };

  const goSignUp = () => {
    navigate('/sign-up');
  };

  return (
    <HeaderWrap>
      <HeaderMark>🗺 MapLog</HeaderMark>
      <HeaderMenu>
        <MenuBtn onClick={goSignIn}>로그인</MenuBtn>
        <MenuBtn onClick={goSignUp}>회원가입</MenuBtn>
      </HeaderMenu>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  width: 1512px;
  height: 120px;
  padding: 0 60px 0 60px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  z-index: 100;
  background-color: #fff;
`;

const HeaderMark = styled.div`
  font-weight: 700;
  font-size: 45px;
  color: ${({ theme }) => theme.colors.primary.hotpink};
  cursor: pointer;
`;

const HeaderMenu = styled.ul`
  display: flex;
`;

const MenuBtn = styled.button`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary.hotpink};
  padding: 0;
  cursor: pointer;

  &:nth-child(1) {
    margin-right: 105px;
  }
`;

export default Header;
