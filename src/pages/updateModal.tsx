import styled from 'styled-components';

import Modal from '../components/modal/modal';

const UpdateModal = () => {
  return (
    <Modal>
      <WritingWrap>
        <BtnContainer>
          <UpdateBtn>수정하기</UpdateBtn>
          <DeleteBtn>삭제하기</DeleteBtn>
        </BtnContainer>
        <TitleContainer>
          <p>제목</p>
          <TitleBox />
        </TitleContainer>
        <DateMood>
          <DateSelect>
            <p>날짜</p>
            <DateBox />
          </DateSelect>
          <MoodSelect />
        </DateMood>
        <LogContent>
          <p>내용</p>
          <LogBox />
        </LogContent>
        <ImgContainer>
          <p>이미지</p>
          <PreviewBox>
            <img alt="test" />
          </PreviewBox>
        </ImgContainer>
      </WritingWrap>
    </Modal>
  );
};

const WritingWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 560px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  p {
    box-sizing: border-box;
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const TitleBox = styled.div`
  width: 450px;
  height: 45px;
  margin-left: 35px;
  padding: 0 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const DateMood = styled.div`
  width: 525px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const DateSelect = styled.div`
  display: flex;
  align-items: center;

  p {
    box-sizing: border-box;
    margin: 0;
    padding-top: 8px;
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const DateBox = styled.div`
  width: 260px;
  height: 45px;
  margin-left: 35px;
  padding: 0 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const MoodSelect = styled.div`
  padding-left: 15px;
  width: 140px;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const LogContent = styled.div`
  display: flex;
  margin-bottom: 20px;

  p {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const LogBox = styled.div`
  width: 450px;
  height: 230px;
  margin-left: 35px;
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 525px;
  margin-bottom: 20px;

  p {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const PreviewBox = styled.div`
  width: 150px;
  height: 150px;
  margin-left: 15px;
  border-radius: 5px;
  object-fit: contain;
  background-color: ${({ theme }) => theme.colors.primary.gray};
`;

const BtnContainer = styled.div`
  position: absolute;
  display: flex;
  top: -60px;
  right: -50px;
`;

const UpdateBtn = styled.button`
  width: 130px;
  height: 40px;
  margin-right: 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary.pink};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  cursor: pointer;
`;

const DeleteBtn = styled.button`
  width: 130px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary.pink};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  cursor: pointer;
`;

export default UpdateModal;
