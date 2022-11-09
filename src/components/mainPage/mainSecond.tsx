import styled from 'styled-components';

import { ReactComponent as DownArrow } from '../../assets/DownArrow.svg';

const MainSecond = () => {
  const moveToDown = () => {
    window.scrollTo({ top: 1964, behavior: 'smooth' });
  };

  return (
    <MainWrap>
      <MainCircle>
        <MainSecondContents>
          <p>🗺</p>
          <MainExplation>
            <p>지도 위에 써보는</p>
            <p>나만의 일기장</p>
          </MainExplation>
        </MainSecondContents>
      </MainCircle>
      <DownArrowStyle onClick={moveToDown} />
    </MainWrap>
  );
};

const MainWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1512px;
  height: 982px;
  background-color: ${({ theme }) => theme.colors.primary.babypink};
`;

const MainCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 700px;
  border-radius: 100%;
  background-color: #fff;
`;

const MainSecondContents = styled.div`
  display: flex;

  p {
    margin: 0 25px 0 25px;
    font-size: 200px;
    user-select: none;
  }
`;

const MainExplation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin: 10px;
    font-size: 50px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    user-select: none;
  }
`;

const DownArrowStyle = styled(DownArrow)`
  position: absolute;
  left: 698px;
  bottom: 30px;
  cursor: pointer;
`;

export default MainSecond;
