import styled from 'styled-components';
import { toast } from 'react-toastify';

const FormContainer = () => {
  const sendCodeMessage = () => {
    toast('인증번호 전송 완료!', { containerId: 'maplogToast' });
  };

  const confirmCodeMessage = () => {
    toast('인증이 완료되었어요!', { containerId: 'maplogToast' });
  };

  const welcomeMessage = () => {
    toast('maplog와 즐거운 시간 보내세요!', { containerId: 'alertToast' });
  };

  return (
    <form>
      <FormWrap>
        <InputContainer>
          <LabelWrap>이름</LabelWrap>
          <InputWrap id="userName" placeholder="홍길동" />
        </InputContainer>
        <InputContainer>
          <LabelWrap>아이디</LabelWrap>
          <InputWrap id="userId" placeholder="hong123" />
        </InputContainer>
        <InputContainer>
          <LabelWrap>비밀번호</LabelWrap>
          <InputWrap id="password" placeholder="hongpw12345!" />
        </InputContainer>
        <CertifyWrap>
          <InputContainer>
            <LabelWrap>이메일</LabelWrap>
            <InputWrap id="userEmail" placeholder="hong123@naver.com" />
          </InputContainer>
          <CertifyBtn type="button" onClick={sendCodeMessage}>
            인증번호 전송
          </CertifyBtn>
        </CertifyWrap>
        <CertifyWrap>
          <InputContainer>
            <LabelWrap>인증번호 인증</LabelWrap>
            <InputWrap />
          </InputContainer>
          <CertifyBtn type="button" onClick={confirmCodeMessage}>
            인증 완료
          </CertifyBtn>
        </CertifyWrap>
        <SignUpBtn onClick={welcomeMessage}>회원가입</SignUpBtn>
      </FormWrap>
    </form>
  );
};

const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 55px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const LabelWrap = styled.label`
  font-size: 25px;
  font-weight: 600;
  margin: 0 20px 5px 0;
  color: ${({ theme }) => theme.colors.primary.hotpink};
`;

const InputWrap = styled.input`
  width: 420px;
  height: 55px;
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
  border-radius: 10px;
  padding: 0 20px 0 20px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};

  ::placeholder {
    color: ${({ theme }) => theme.colors.primary.gray};
  }
`;

const CertifyWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 610px;
`;

const CertifyBtn = styled.button`
  margin: 38px 0 0 50px;
  width: 140px;
  height: 40px;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.primary.pink};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

const SignUpBtn = styled.button`
  width: 200px;
  height: 55px;
  text-align: center;
  font-weight: 600;
  font-size: 25px;
  margin-left: 195px;
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.primary.pink};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export default FormContainer;
