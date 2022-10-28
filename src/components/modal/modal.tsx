import styled from 'styled-components';

const Modal = () => {
  return (
    <ModalView>
      <ModalBg>
        <ModalContainer>
          <ModalContent>모달창 테스트</ModalContent>
          <ModalCloseBtn>닫기</ModalCloseBtn>
        </ModalContainer>
      </ModalBg>
    </ModalView>
  );
};

const ModalView = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const ModalBg = styled.div`
  background-color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  opacity: 80%;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: #fff;
`;

const ModalContent = styled.p`
  text-align: center;
  font-size: 20px;
`;

const ModalCloseBtn = styled.button`
  width: 100px;
  height: 30px;
`;

export default Modal;
