import React from "react";
import PageContainer from "../../components/PageContainer";
import Certifaciton from "../../components/Certifaciton/cerfitacion";
import Banner from "../../components/Banner/Banner";
const Home = () => {
  return (
    <>
      <PageContainer>
        <Banner />
        <Certifaciton />
      </PageContainer>
    </>
  );
};

export default Home;
