import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderMark>🗺 MapLog</HeaderMark>
      <HeaderMenu>
        <li>로그인</li>
        <li>회원가입</li>
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
  list-style: none;
  font-size: 30px;

  li {
    &:nth-child(1) {
      margin-right: 105px;
    }
    color: ${({ theme }) => theme.colors.primary.hotpink};
    cursor: pointer;
  }
`;

export default Header;
