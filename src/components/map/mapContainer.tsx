// import styled from 'styled-components';
// import { useState, useEffect } from 'react';

// import SearchContainer from './searchContainer';

// declare global {
//   interface Window {
//     eslint-disable-next-line @typescript-eslint/no-explicit-any
//     kakao: any;
//   }
//   eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const kakao: any;
// }

// const MapContainer = () => {
//   const [recentMap, setRecentMap] = useState();

//   useEffect(() => {
//     // 지도 나타내기
//     const container = document.getElementById('map');
//     const options = {
//       center: new kakao.maps.LatLng(37.5666805, 126.9784147),
//       level: 2,
//     };
//     const map = new kakao.maps.Map(container, options);
//     setRecentMap(map);
//   }, []);

//   return (
//     <MapWrap id="map">
//       <SearchContainer />
//     </MapWrap>
//   );
// };

// const MapWrap = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100vh;
// `;

import styled from 'styled-components';

const MapContainer = () => {
  return <MapWrap />;
};

const MapWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: pink;
`;

export default MapContainer;
