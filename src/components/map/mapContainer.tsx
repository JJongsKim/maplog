import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../../atoms/modalState';

import WritingModal from '../../pages/writingModal';
import Portal from '../Portal';

const MapContainer = () => {
  const [value, setValue] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');
  const [placeInfo, setPlaceInfo] = useState<any[]>([]);
  const [isModal, setIsModal] = useRecoilState(modalState);

  const handleKeyword = (e: { preventDefault: () => void; target: { value: string } }) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const submitKeyword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setKeyword(value);
  };

  const clickSubmit = () => {
    // eslint-disable-next-line no-alert
    if (value === '') alert('검색어를 입력해주세요!');
  };

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(37.5666805, 126.9784147),
      level: 3,
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let markers: any[] = [];

    const ps = new kakao.maps.services.Places();
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    // 키워드로 장소 검색 시작
    searchPlaces();

    function searchPlaces() {
      ps.keywordSearch(keyword, placesSearchCB);
    }

    // 장소 검색 후 불러오는 함수
    function placesSearchCB(data: any, status: number) {
      if (status === kakao.maps.services.Status.OK) {
        displayPlaces(data);
        setPlaceInfo(data);
        console.log(data);
      } else if (status === kakao.maps.services.Status.ERROR) {
        // eslint-disable-next-line no-alert
        alert('검색 결과 중 오류가 발생했습니다!');
      }
    }

    // 검색 목록과 마커 표시하기
    function displayPlaces(places: string | any[]) {
      const listEl = document.getElementById('placesList');
      const fragment = document.createDocumentFragment();
      const bounds = new kakao.maps.LatLngBounds();

      removeMarker();

      for (let i = 0; i < places.length; i += 1) {
        const placePosition = new kakao.maps.LatLng(places[i].y, places[i].x);
        const marker = addMarker(placePosition, i);

        bounds.extend(placePosition);

        // eslint-disable-next-line no-loop-func
        (function (marker, placeTitle) {
          kakao.maps.event.addListener(marker, 'mouseover', function () {
            displayInfowindow(marker, placeTitle);
          });
          kakao.maps.event.addListener(marker, 'mouseout', function () {
            infowindow.close();
          });
        })(marker, places[i].place_name);
      }

      if (listEl) listEl.appendChild(fragment);
      map.setBounds(bounds);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function addMarker(markerPosition: any, idx: number) {
      const imageSrc =
        'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';
      const imageSize = new kakao.maps.Size(36, 37);
      const imgOptions = {
        spriteSize: new kakao.maps.Size(36, 691),
        spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10),
        offset: new kakao.maps.Point(13, 37),
      };
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });

      marker.setMap(map);
      markers.push(marker);

      return marker;
    }

    // 인포윈도우로 장소명 표시하기
    function displayInfowindow(marker: any, title: string) {
      const content = `<div style="padding:3px;z-index:1;font-size:12px;" class="marker-title">${title}</div>`;

      infowindow.setContent(content);
      infowindow.open(map, marker);
    }

    // 지도 위 마커 삭제
    function removeMarker() {
      for (let i = 0; i < markers.length; i += 1) {
        markers[i].setMap(null);
      }
      markers = [];
    }
  }, [keyword]);

  return (
    <MapWrap id="map">
      <SearchWrap>
        <SearchModal>
          <SearchNavBar>
            <form onSubmit={submitKeyword}>
              <SearchInput value={value} onChange={handleKeyword} placeholder="ex)강남역 맛집" />
              <SearchBtn id="submitBtn" type="submit" onClick={clickSubmit}>
                검색하기
              </SearchBtn>
            </form>
          </SearchNavBar>
          <SearchList id="placesList">
            {placeInfo.map(place => (
              <li key={place.id}>
                <InfoContainer onClick={() => setIsModal(!isModal)}>
                  <InfoMarker>☀️</InfoMarker>
                  <InfoContent>
                    <PlaceTitle>{place.place_name}</PlaceTitle>
                    <PlaceRoadAddress>{place.road_address_name}</PlaceRoadAddress>
                    <PlaceAddress>{place.address_name}</PlaceAddress>
                  </InfoContent>
                </InfoContainer>
              </li>
            ))}
          </SearchList>
          <Pagination>페이지 목록 준비중....</Pagination>
          {isModal && (
            <Portal>
              <WritingModal />
            </Portal>
          )}
        </SearchModal>
      </SearchWrap>
    </MapWrap>
  );
};

const MapWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const SearchWrap = styled.div`
  position: absolute;
  top: 155px;
  left: 50px;
  width: 30%;
  height: 100vh;
  z-index: 5;
`;

const SearchModal = styled.div`
  width: 450px;
  height: 75%;
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const SearchNavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.gray};
`;

const SearchInput = styled.input`
  width: 150px;
  height: 32px;
  margin: 0 10px;
  padding: 0 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
`;

const SearchBtn = styled.button`
  height: 32px;
  margin: 0 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary.pink};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

const SearchList = styled.ul`
  margin: 0;
  padding: 0;
  height: 86%;
  list-style: none;
  overflow: scroll;

  li {
    border: 1px solid #ededed;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InfoMarker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin-left: 15px;
  font-size: 25px;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  padding-left: 30px;
`;

const PlaceTitle = styled.h3`
  margin: 0 0 5px 0;
`;

const PlaceRoadAddress = styled.div`
  margin: 0;
  padding: 0;
`;

const PlaceAddress = styled.div`
  margin: 0;
  padding: 0;
  color: #555;
`;

const Pagination = styled.div`
  height: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MapContainer;
