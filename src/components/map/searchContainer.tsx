import styled from 'styled-components';

const SearchContainer = () => {
  return (
    <SearchWrap>
      <SearchModal>
        <SearchNavBar>
          <SearchInput />
          <SearchBtn>검색하기</SearchBtn>
        </SearchNavBar>
        <SearchList>검색한 장소들이 들어갈 위치</SearchList>
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

const SearchList = styled.div``;

export default SearchContainer;
