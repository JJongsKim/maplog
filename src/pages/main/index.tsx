import styled from 'styled-components';

import Layout from '../../components/layout';

const Main = () => {
  return (
    <Layout>
      <MainWrap />
    </Layout>
  );
};

const MainWrap = styled.div`
  width: 1512px;
  height: 982px;
  background-color: ${({ theme }) => theme.colors.primary.babypink};
`;

export default Main;
