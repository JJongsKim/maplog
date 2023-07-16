import { styled } from 'styled-components';

import { theme } from '../styles/theme';

const Test = () => {
  return (
    <div>
      <TestP1>Regular 400 폰트 테스트</TestP1>
      <TestP2>Regular 500 폰트 테스트</TestP2>
      <TestP3>Bold 600 폰트 테스트</TestP3>
      <TestColor1 />
      <TestColor2 />
    </div>
  );
};

const TestP1 = styled.h1`
  ${theme.font.R_BODY_20};
`;

const TestP2 = styled.h1`
  ${theme.font.M_BODY_22};
`;

const TestP3 = styled.h1`
  ${theme.font.B_POINT_26};
`;

const TestColor1 = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: ${theme.color.hotpink};
`;

const TestColor2 = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: ${theme.color.brown};
`;

export default Test;
