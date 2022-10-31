import { useState } from 'react';
import Modal from '../components/modal/modal';
import Portal from '../components/Portal';

const ModalTest = () => {
  const [onModal, setOnModal] = useState<boolean>(false);

  return (
    <>
      <button type="button" onClick={() => setOnModal(!onModal)}>
        눌러보세요
      </button>
      {onModal && (
        <Portal>
          <Modal>작성모달창</Modal>
        </Portal>
      )}
    </>
  );
};

export default ModalTest;
