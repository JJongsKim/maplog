import styled from 'styled-components';

import Modal from '../components/modal/modal';

const UpdateModal = () => {
  return (
    <Modal>
      <WritingWrap>글 수정 모달창</WritingWrap>
    </Modal>
  );
};

const WritingWrap = styled.div`
  background-color: pink;
`;

export default UpdateModal;
