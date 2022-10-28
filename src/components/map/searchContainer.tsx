import styled from 'styled-components';
import { useState } from 'react';

const SearchContainer = () => {
  const [search, setSearch] = useState<string>('');
  // const ps = new kakao.maps.services.Places();

  // const placeSearchCB = (data, status, pagination) => {
  //   if (status === kakao.maps.services.Status.OK) {
  //     const bounds = new kakao.maps.LatLngBounds();
  //     for (let i = 0; i < data.length; i += 1) {
  //       displayMarker(data[i]);
  //       bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
  //     }
  //     map.setBounds(bounds)
  //   }
  // }

  const onChangeSearch = (e: any) => {
    setSearch(e.target.value);
  };

  // const searchForm = document.getElementById('submitBtn');
  // searchForm?.addEventListener('click', function (e) {
  //   e.preventDefault();
  // });

  return (
    <SearchWrap>
      <SearchModal>
        <SearchNavBar>
          <form>
            <SearchInput value={search} onChange={onChangeSearch} />
            <SearchBtn id="submitBtn" type="submit">
              검색하기
            </SearchBtn>
          </form>
        </SearchNavBar>
        <SearchList>검색한 장소들이 들어갈 위치</SearchList>
        <SearchPageList>페이지네이션 공간</SearchPageList>
      </SearchModal>
    </SearchWrap>
  );
};

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

const SearchList = styled.div`
  background-color: pink;
  height: 85%;
`;

const SearchPageList = styled.div`
  background-color: orange;
  height: 8%;
`;

export default SearchContainer;
