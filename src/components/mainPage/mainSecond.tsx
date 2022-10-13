import styled from 'styled-components';

const MainSecond = () => {
  return <MainWrap />;
};

const MainWrap = styled.div`
  width: 1512px;
  height: 982px;
  background-color: ${({ theme }) => theme.colors.primary.babypink};
`;

export default MainSecond;
