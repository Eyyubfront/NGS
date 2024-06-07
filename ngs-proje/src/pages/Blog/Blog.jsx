import React from "react";
import PageContainer from "../../components/PageContainer";
import bannerph from "../../assets/images/blog/bannerframe.png";
import ellipse from "../../assets/images/blog/Ellipse.png";
import eye from "../../assets/images/blog/eye.svg";
import date from "../../assets/images/blog/date.svg";
import Container from "@mui/material/Container";
import BlogComponent from "../../components/BlogComponent/BlogComponent";
import Cerfitacion from "../../components/Certifaciton/cerfitacion";

const Blog = () => {
  return (
    <PageContainer>
      <div id="blog">
        <div className="blog__banner">
          <img src={bannerph} alt="banner" className="bannerph" />
          <div className="blog__content">
            <div className="top__content">
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Quis odio fermentum
                lacus porta tristique nunc pretium. Pulvinar montes sed
                elementum sed viverra integer fermentum.
              </p>
            </div>
            <div className="bottom__content">
              <span>Emin Həsənov</span>
              <img src={ellipse} alt="ellipse" />
            </div>
          </div>
        </div>
        <Container>
          <div className="blog__paragraph">
            <p>
              <span className="lorem">Lorem</span> ipsum dolor sit amet
              consectetur. Eget aenean nisi urna amet. Enim mattis nunc arcu a
              nisl eu ipsum. Turpis gravida elementum praesent mattis vulputate
              sed aliquet volutpat. Egestas ante et cursus orci lacus. Odio
              consectetur eu praesent rutrum libero cursus ante in. Eu lobortis
              pharetra condimentum arcu netus. Pretium ut consequat viverra amet
              sem dictumst volutpat ullamcorper. Eleifend suspendisse diam
              cursus egestas dis id quisque. A pretium aliquet blandit at cras
              convallis et pellentesque. Sit gravida euismod tristique donec. Ut
              posuere proin sagittis odio. Sit pellentesque massa eleifend
              tempor risus. Nullam quis egestas sollicitudin hac.
            </p>
            <p className="margin">
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
            <p>
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
            <div className="paragraph__info">
              <div className="eye">
                <img src={eye} alt="icon" />
                <span>368 Baxış</span>
              </div>
              <div className="date">
                <img src={date} alt="icon" />
                <span>16 Yanvar 2024</span>
              </div>
            </div>
          </div>
        </Container>

          <BlogComponent />
          <Cerfitacion/>
      </div>
    </PageContainer>
  );
};

export default Blog;
