import styled from 'styled-components';
import { useRef } from 'react';

import Modal from '../components/modal/modal';

type moodType = {
  value: string;
  moodName: string;
};

const moodOptions: moodType[] = [
  {
    value: 'happy',
    moodName: '😆 HAPPY',
  },
  {
    value: 'soso',
    moodName: '🙂 SOSO',
  },
  {
    value: 'sad',
    moodName: '😢 SAD',
  },
  {
    value: 'angry',
    moodName: '😡 ANGRY',
  },
];

const WritingModal = () => {
  const uploadRef = useRef<HTMLInputElement>(null);

  return (
    <Modal>
      <form>
        <WritingWrap>
          <TitleContainer>
            <p>제목</p>
            <TitleInput />
          </TitleContainer>
          <DateMood>
            <DateSelect>
              <p>날짜</p>
              <DateBox />
            </DateSelect>
            <MoodSelect>
              {moodOptions.map(option => (
                <option value={option.value}>{option.moodName}</option>
              ))}
            </MoodSelect>
          </DateMood>
          <LogContent>
            <p>내용</p>
            <LogInput />
          </LogContent>
          <ImgContainer>
            <p>이미지</p>
            <PreviewBox>
              <img alt="test" />
            </PreviewBox>
            <input ref={uploadRef} type="file" accept="image/*" style={{ display: 'none' }} />
            <ImgUploadBox
              onClick={() => {
                uploadRef.current?.click();
              }}
            >
              사진 선택
            </ImgUploadBox>
          </ImgContainer>
          <LogSubmitBtn>작성하기</LogSubmitBtn>
        </WritingWrap>
      </form>
    </Modal>
  );
};

const WritingWrap = styled.div`
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

  div {
    width: 80px;
    height: 80px;
    background-color: ${({ theme }) => theme.colors.primary.gray};
  }
`;

const TitleInput = styled.input`
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

const MoodSelect = styled.select`
  padding-left: 15px;
  width: 140px;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
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

const LogInput = styled.input`
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
  width: 85px;
  height: 85px;
  margin-left: 15px;
  border-radius: 5px;
  object-fit: contain;
  background-color: ${({ theme }) => theme.colors.primary.gray};
`;

// type='file' input 커스텀 UI
const ImgUploadBox = styled.div`
  width: 150px;
  height: 40px;
  margin-left: 15px;
  padding: 8px 0;
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary.pink};
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const LogSubmitBtn = styled.button`
  width: 200px;
  height: 55px;
  font-size: 24px;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary.pink};
  cursor: pointer;
`;

export default WritingModal;
