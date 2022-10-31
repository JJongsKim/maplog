import { ReactNode } from 'react';
import styled from 'styled-components';

type childrenType = {
  children: ReactNode;
};

const Modal = ({ children }: childrenType) => {
  return (
    <ModalView>
      <ModalBg>
        <ModalContainer>
          <ModalHeader>
            <p>📝</p>
          </ModalHeader>
          <ModalContent>{children}</ModalContent>
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
  align-items: center;
  width: 740px;
  height: 680px;
  border-radius: 10px;
  background-color: #fff;
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 100px;
  background-color: orange;

  p {
    margin: 20px 0 0 50px;
    padding: 0;
    font-size: 55px;
  }
`;

const ModalContent = styled.p``;

export default Modal;
