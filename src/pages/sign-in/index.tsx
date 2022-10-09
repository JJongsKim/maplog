import styled from 'styled-components';

const SignIn = () => {
  return <BgWrap>로그인페이지</BgWrap>;
};

const BgWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.pink};
`;

export default SignIn;
