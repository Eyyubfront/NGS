import React from "react";
import PageContainer from "../../components/PageContainer";
import BlogComponent from "../../components/BlogComponent/BlogComponent";
import Cerfitacion from "../../components/Certifaciton/cerfitacion";
import { useTranslation } from 'react-i18next';

const Blogs = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageContainer>
        <div id="blogs">
          <div className="blogs__head">
            <h1>{t('blogs')}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Quis odio fermentum lacus
              porta tristique nunc pretium. Pulvinar montes sed elementum sed
              viverra integer fermentum.
            </p>
          </div>

          <div className="blogs__container">
            <BlogComponent />
          </div>
          <Cerfitacion/>
        </div>
      </PageContainer>
    </>
  );
};

export default Blogs;