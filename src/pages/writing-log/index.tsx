import styled from 'styled-components';

import Layout from '../../components/layout';
import MapContainer from '../../components/map/mapContainer';

const WritingLog = () => {
  return (
    <Layout>
      <MapWrap>
        <MapContainer />
      </MapWrap>
    </Layout>
  );
};

const MapWrap = styled.div`
  width: 1512px;
  height: 982px;
  overflow: hidden;
`;

export default WritingLog;
