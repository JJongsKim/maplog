import { ReactNode } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { ModalState } from '../../atoms/ModalState';

type childrenType = {
  children: ReactNode;
};

const Modal = ({ children }: childrenType) => {
  const [isModal, setIsModal] = useRecoilState(ModalState);

  return (
    <ModalView>
      <ModalBg onClick={() => setIsModal(!isModal)}>
        <ModalContainer onClick={e => e.stopPropagation()}>
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
  z-index: 5;
`;

const ModalBg = styled.div`
  background-color: rgba(153, 153, 153, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 720px;
  height: 660px;
  border-radius: 10px;
  margin-top: 100px;
  background-color: #fff;
  z-index: 10;
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 100px;

  p {
    margin: 20px 0 0 50px;
    padding: 0;
    font-size: 55px;
  }
`;

const ModalContent = styled.div``;

export default Modal;
