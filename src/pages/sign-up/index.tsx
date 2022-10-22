import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Polygon } from '../../assets/Polygon.svg';
import FormContainer from '../../components/signUp/formContainer';

const SignUp = () => {
  const navigate = useNavigate();

  const goSignIn = () => {
    navigate('/sign-in');
  };

  return (
    <BgWrap>
      <SignUpWrap>
        <SignUpBorder />
        <GoSignInInput>
          <GoSignInBtn onClick={goSignIn}>
            <PolygonStyle />
            <p>로그인으로 돌아가기</p>
          </GoSignInBtn>
          <FormContainer />
        </GoSignInInput>
        <TapeWrap>
          <IndexTape />
          <IndexTape />
        </TapeWrap>
      </SignUpWrap>
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

const SignUpWrap = styled.div`
  display: grid;
  grid-template-columns: 36px 734px;
  position: relative;
  width: 770px;
  height: 750px;
  border-radius: 30px 10px 10px 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

const SignUpBorder = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.primary.gray};
`;

const PolygonStyle = styled(Polygon)``;

const GoSignInBtn = styled.div`
  display: flex;
  align-items: center;
  width: 205px;
  height: 40px;
  margin: 20px 0 0 25px;
  cursor: pointer;

  p {
    margin-left: 5px;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const GoSignInInput = styled.div`
  display: flex;
  flex-direction: column;
`;

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

export default SignUp;
