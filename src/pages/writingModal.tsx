import styled from 'styled-components';

import Modal from '../components/modal/modal';

const WritingModal = () => {
  return (
    <Modal>
      <WritingWrap>글 작성 모달창</WritingWrap>
    </Modal>
  );
};

const WritingWrap = styled.div`
  background-color: pink;
`;

export default WritingModal;
