import Layout from '../../components/layout';
import MainFirst from '../../components/mainPage/mainFirst';
import MainSecond from '../../components/mainPage/mainSecond';
import MainThird from '../../components/mainPage/mainThird';

const Main = () => {
  return (
    <Layout>
      <MainFirst />
      <MainSecond />
      <MainThird />
    </Layout>
  );
};

export default Main;
