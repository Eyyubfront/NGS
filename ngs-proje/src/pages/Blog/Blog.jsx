import React, { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer";
import bannerph from "../../assets/images/blog/bannerframe.png";
import ellipse from "../../assets/images/blog/Ellipse.png";
import eye from "../../assets/images/blog/eye.svg";
import date from "../../assets/images/blog/date.svg";
import Container from "@mui/material/Container";
import BlogComponent from "../../components/BlogComponent/BlogComponent";
import Cerfitacion from "../../components/Certifaciton/cerfitacion";
import { useParams } from "react-router";
import axios from "axios";
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const { t } = useTranslation();

  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(
          `https://ngs-794fc9210221.herokuapp.com/api/blogs/${id}`
        );
        setBlogPost(response.data);
      } catch (error) {
        console.error("Error fetching the blog post", error);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (!blogPost) return <div>Loading...</div>;

  return (
    <PageContainer>
      <div id="blog">
        <div className="blog__banner">
          <img src={bannerph} alt="banner" className="bannerph" />
          <div className="blog__content">
            <div className="top__content">
              <h1>{blogPost.title}</h1>
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
            {blogPost.content}
            </p>
            <div className="paragraph__info">
              <div className="eye">
                <img src={eye} alt="icon" />
                <span>364 {t('view')}</span>
              </div>
              <div className="date">
                <img src={date} alt="icon" />
                <span>8 Sentyabr 2024</span>
                
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
