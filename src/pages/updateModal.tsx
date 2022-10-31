import styled from 'styled-components';

import Modal from '../components/modal/modal';

const UpdateModal = () => {
  return (
    <Modal>
      <ModalWrap />
    </Modal>
  );
};

const ModalWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
`;

export default UpdateModal;
