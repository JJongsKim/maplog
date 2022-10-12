import styled from 'styled-components';

import Header from '../Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrap>
      <Header />
      <main>{children}</main>
    </LayoutWrap>
  );
};

const LayoutWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default Layout;
