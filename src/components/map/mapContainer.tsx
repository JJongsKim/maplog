import styled from 'styled-components';
import { useEffect, useState } from 'react';

type placeType = {
  place_name: string;
  road_address_name: string;
  address_name: string;
  phone: string;
  place_url: string;
};

const MapContainer = () => {
  const [value, setValue] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');
  const [recentMap, setRecentMap] = useState<any>();

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

      if (listEl) removeAllChildNods(listEl);

      removeMarker();

      for (let i = 0; i < places.length; i += 1) {
        const placePosition = new kakao.maps.LatLng(places[i].y, places[i].x);
        const marker = addMarker(placePosition, i);
        const itemEl = getListItem(i, places[i]);

        bounds.extend(placePosition);

        // eslint-disable-next-line no-loop-func
        (function (marker, placeTitle) {
          kakao.maps.event.addListener(marker, 'mouseover', function () {
            displayInfowindow(marker, placeTitle);
          });
          kakao.maps.event.addListener(marker, 'mouseout', function () {
            infowindow.close();
          });

          itemEl.onmouseover = function () {
            displayInfowindow(marker, placeTitle);
          };
          itemEl.onmouseout = function () {
            infowindow.close();
          };
        })(marker, places[i].place_name);

        fragment.appendChild(itemEl);
      }

      if (listEl) listEl.appendChild(fragment);
      map.setBounds(bounds);
    }

    function getListItem(index: number, places: placeType) {
      // console.log(placeInfo);
      const el = document.createElement('li');
      const itemStr = `
        <div class="info">
          <span class="marker marker_${
            index + 1
          }" style="background-image: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png')">
            ${index + 1}
          </span>
          <div>
            <h5 class="info-item place-name">${places.place_name}</h5>
            ${
              places.road_address_name
                ? `<span class="info-item road-address-name">
                  ${places.road_address_name}
                </span>
                <span class="info-item address-name">
                  ${places.address_name}
                  </span>`
                : `<span class="info-item address-name">
                  ${places.address_name}
                </span>`
            }
            <span class="info-item tel">
              ${places.phone}
            </span>
          </div>
        </div>
      `;

      el.innerHTML = itemStr;
      el.className = 'item';

      return el;
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
      const content = `<div style="padding:5px;z-index:1;" class="marker-title">${title}</div>`;

      infowindow.setContent(content);
      infowindow.open(recentMap, marker);
    }

    // 지도 위 마커 삭제
    function removeMarker() {
      for (let i = 0; i < markers.length; i += 1) {
        markers[i].setMap(null);
      }
      markers = [];
    }

    function removeAllChildNods(el: HTMLElement) {
      while (el.hasChildNodes()) {
        if (el.lastChild) el.removeChild(el.lastChild);
      }
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
          <SearchList id="placesList" />
          <Pagination>페이지 목록 들어갈 자리</Pagination>
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
  height: 740px;
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
  height: 650px;
  overflow: scroll;
`;

const Pagination = styled.div`
  height: 40px;
  background-color: orange;
`;

export default MapContainer;
