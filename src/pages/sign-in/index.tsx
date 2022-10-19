import styled from 'styled-components';

import FormContainer from '../../components/signIn/formContainer';

// type InitialValues = {
//   email: string;
//   password: string;
// };

const SignIn = () => {
  return (
    <BgWrap>
      <SignInWrap>
        <SignInBorder />
        <TitleInput>
          <SignInTitle>MapLog</SignInTitle>
          <FormContainer />
        </TitleInput>
        <TapeWrap>
          <IndexTape />
          <IndexTape />
        </TapeWrap>
      </SignInWrap>
    </BgWrap>
  );
};

const BgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1512px;
  height: 982px;
  background-color: ${({ theme }) => theme.colors.primary.pink};
`;

const SignInWrap = styled.div`
  display: grid;
  grid-template-columns: 36px 734px;
  position: relative;
  justify-content: center;
  width: 770px;
  height: 750px;
  border-radius: 30px 10px 10px 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

const SignInBorder = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.primary.gray};
`;

const SignInTitle = styled.p`
  margin-left: 245px;
  font-weight: 600;
  font-size: 60px;
  color: ${({ theme }) => theme.colors.primary.hotpink};
`;

const TitleInput = styled.div``;

const TapeWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 770px;
  top: 50px;
`;

const IndexTape = styled.div`
  width: 80px;
  height: 45px;

  &:nth-child(1) {
    margin-bottom: 25px;
    background-color: #ff9090;
  }
  &:nth-child(2) {
    background-color: #fff59c;
  }
`;

export default SignIn;
