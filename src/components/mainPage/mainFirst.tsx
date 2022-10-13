import styled from 'styled-components';

const MainFirst = () => {
  return (
    <MainWrap>
      <MainContents>
        <p>그 때의 장소</p>
        <p>그 때의 기분</p>
        <p>그 때의 모든 것</p>
      </MainContents>
      <MainEmoji>
        <p>🗺</p>
        <p>✏️</p>
        <p>🥳</p>
        <p>📚</p>
      </MainEmoji>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1512px;
  height: 982px;
  background-color: ${({ theme }) => theme.colors.primary.babypink};
`;

const MainContents = styled.div`
  margin: 240px 0 0 150px;

  p {
    margin: 20px 0;
    font-size: 50px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    user-select: none;
  }
`;

const MainEmoji = styled.div`
  width: 400px;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin: 330px 245px 0 0;

  p {
    margin: 0;
    text-align: center;
    font-size: 160px;
    user-select: none;
    z-index: 0;

    &:nth-child(1) {
      transform: rotate(340deg);
      animation: motion 1s linear 0s infinite alternate;
    }
    &:nth-child(2) {
      transform: rotate(100deg);
    }
    &:nth-child(3) {
      transform: rotate(355deg);
    }
    &:nth-child(4) {
      transform: rotate(15deg);
    }

    @keyframes motion {
      0% {
        margin-top: 0;
      }
      100% {
        margin-top: 20px;
      }
    }
  }
`;

export default MainFirst;
