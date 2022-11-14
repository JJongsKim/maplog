import styled from 'styled-components';

import Layout from '../../components/layout';
import LogmapContainer from '../../components/map/logmapContainer';

const Logmap = () => {
  return (
    <Layout>
      <MapWrap>
        <LogmapContainer />
      </MapWrap>
    </Layout>
  );
};

const MapWrap = styled.div`
  width: 1512px;
  height: 982px;
  overflow: hidden;
`;

export default Logmap;
