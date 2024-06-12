import React from "react";
import PageContainer from "../../components/PageContainer";
import float from "../../assets/images/float.png";
import newsImg from "../../assets/images/homephoto/pageservicesix.png";
import Cerfitacion from "../../components/Certifaciton/cerfitacion";

const SubNews = () => {
  return (
    <>
      <PageContainer>
        <div id="subNews">
          <div className="subNews__head">
            <h1>Təhlükəsiz mühitin əsasları nələrdir ?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Quis odio fermentum lacus
              porta tristique nunc pretium. Pulvinar montes sed elementum sed
              viverra integer fermentum.
            </p>
          </div>
          <div className="subNews__content">
            <img src={float} alt="float" />
            <p>
              <span>Lorem</span> ipsum dolor sit amet consectetur. Eget aenean
              nisi urna amet. Enim mattis nunc arcu a nisl eu ipsum. Turpis
              gravida elementum praesent mattis vulputate sed aliquet volutpat.
              Egestas ante et cursus orci lacus. Odio consectetur eu praesent
              rutrum libero cursus ante in. Eu lobortis pharetra condimentum
              arcu netus. Pretium ut consequat viverra amet sem dictumst
              volutpat ullamcorper. Eleifend suspendisse diam cursus egestas dis
              id quisque. A pretium aliquet blandit at cras convallis et
              pellentesque. Sit gravida euismod tristique donec. Ut posuere
              proin sagittis odio. Sit pellentesque massa eleifend tempor risus.
              Nullam quis egestas sollicitudin hac Lorem ipsum dolor sit amet
              consectetur. Eget aenean nisi urna amet. Enim mattis nunc arcu a
              nisl eu ipsum. Turpis gravida ipsum dolor sit amet consectetur.
              Eget aenean nisi urna amet. Eni
            </p>
            <p className="bottom__par">
              Ut posuere proin sagittis odio. Sit pellentesque massa eleifend
              tempor risus. Nullam quis egestas sollicitudin hac. Lorem ipsum
              dolor sit amet consectetur. Eget aenean nisi urna amet. Enim
              mattis nunc arcu a nisl eu ipsum. Turpis gravida elementum
              praesent mattis vulputate sed aliquet volutpat. Egestas ante et
              cursus orci lacus. Odio consectetur eu praesent rutrum libero
              cursus ante in. Eu lobortis pharetra condimentum arcu netus.
              Pretium ut consequat viverra amet sem dictumst volutpat
              ullamcorper. Eleifend suspendisse diam cursus egestas dis id
              quisque. A pretium aliquet blandit at cras convallis et
              pellentesque. Sit gravida euismod tristique donec. Ut posuere
              proin sagittis odio. Sit pellentesque massa eleifend tempor risus.
              Nullam quis egestas sollicitudin hac.
            </p>
          </div>

          <div className="subNews__body">
            <div>
              <h1>Təkliflər</h1>
            </div>

            <div className="box__container">
              <div className="news__box">
                <img src={newsImg} alt="img" />
                <div className="box__content">
                  <h2>Təhlükəsiz mühitin əsasları nələrdir ?</h2>
                </div>
              </div>
              <div className="news__box">
                <img src={newsImg} alt="img" />
                <div className="box__content">
                  <h2>Təhlükəsiz mühitin əsasları nələrdir ?</h2>
                </div>
              </div>
              <div className="news__box">
                <img src={newsImg} alt="img" />
                <div className="box__content">
                  <h2>Təhlükəsiz mühitin əsasları nələrdir ?</h2>
                </div>
              </div>
            </div>
          </div>

          <Cerfitacion />
        </div>
      </PageContainer>
    </>
  );
};

export default SubNews;
