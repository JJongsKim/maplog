import styled from 'styled-components';

import Layout from '../../components/layout';
import MainFirst from '../../components/mainPage/mainFirst';
import MainSecond from '../../components/mainPage/mainSecond';
import MainThird from '../../components/mainPage/mainThird';

const Main = () => {
  return (
    <Layout>
      <MainContainer>
        <MainFirst />
        <MainSecond />
        <MainThird />
      </MainContainer>
    </Layout>
  );
};

const MainContainer = styled.div`
  /* width: 1512px;
  height: 982px;
  overflow: hidden; */
`;

export default Main;
