import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FormContainer = () => {
  const navigate = useNavigate();

  const goSignUp = () => {
    navigate('/sign-up');
  };

  return (
    <form>
      <FormWrap>
        <InputContainer>
          <LabelWrap>아이디</LabelWrap>
          <InputWrap />
        </InputContainer>
        <InputContainer>
          <LabelWrap>비밀번호</LabelWrap>
          <InputWrap />
        </InputContainer>
        <GoSignUpBtn onClick={goSignUp}>아직 맵로그 계정이 없으신가요?</GoSignUpBtn>
        <SignInBtn>로그인</SignInBtn>
      </FormWrap>
    </form>
  );
};

const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 45px;

  &:nth-child(1) {
    margin-left: 22px;
  }
`;

const LabelWrap = styled.label`
  font-size: 28px;
  font-weight: 600;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.primary.hotpink};
`;

const InputWrap = styled.input`
  width: 420px;
  height: 65px;
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
  border-radius: 10px;
  font-size: 25px;
`;

const GoSignUpBtn = styled.button`
  padding: 0;
  margin-top: 85px;
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.gray};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const SignInBtn = styled.button`
  margin-top: 25px;
  width: 200px;
  height: 55px;
  text-align: center;
  font-weight: 600;
  font-size: 25px;
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.primary.pink};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export default FormContainer;
