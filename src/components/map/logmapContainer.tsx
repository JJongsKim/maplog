import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { ModalState } from '../../atoms/ModalState';

import UpdateModal from '../../pages/updateModal';
import Portal from '../Portal';

import { logDemoData } from './logDemoData';

type modalContentType = {
  latlng: any;
  log: {
    title: string;
    logDate: string;
    mood: string;
    logContent: string;
  };
};

const logmapContainer = () => {
  const [isModal, setIsModal] = useRecoilState(ModalState);
  const [modalContent, setModalContent] = useState<modalContentType | null>(null);

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(37.5666805, 126.9784147),
      level: 8,
    };

    const logmap = new kakao.maps.Map(mapContainer, mapOption);

    const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png';

    for (let i = 0; i < logDemoData.length; i += 1) {
      // 마커 이미지의 이미지 크기 입니다
      const imageSize = new kakao.maps.Size(35, 40);

      // 마커 이미지를 생성합니다
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        map: logmap, // 마커를 표시할 지도
        position: logDemoData[i].latlng, // 마커를 표시할 위치
        image: markerImage, // 마커 이미지
      });

      kakao.maps.event.addListener(marker, 'click', function () {
        const contentArray = logDemoData[i];
        setModalContent(contentArray);
        setIsModal(!isModal);
      });
    }
  }, []);

  return (
    <MapWrap id="map">
      {isModal && (
        <Portal>
          <UpdateModal {...modalContent} />
        </Portal>
      )}
    </MapWrap>
  );
};

const MapWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export default logmapContainer;
