import React, { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer";
import Cerfitacion from "../../components/Certifaciton/cerfitacion";
import fir from "../../assets/images/news/first.png";
import { Link } from "react-router-dom";
import axios from "axios";

const News = () => {

  const [newsPost, setNewsPost] = useState([]);

  // Fetch blog posts on component mount
  useEffect(() => {
    const fetchNewsPosts = async () => {
      try {
        const response = await axios.get(
          "https://ngs-794fc9210221.herokuapp.com/api/news"
        );
        setNewsPost(response.data);
        console.log("Blog posts fetched:", response.data);
      } catch (error) {
        console.error("Error fetching blog posts", error);
      }
    };

    fetchNewsPosts();
  }, []);
  return (
    <PageContainer>
      <div id="news">
        <div className="news__head">
          <h1>Xəbərlər</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis odio fermentum lacus
            porta tristique nunc pretium. Pulvinar montes sed elementum sed
            viverra integer fermentum.
          </p>
        </div>

        <div className="news__body">
          {newsPost.map((item) => (
            <div key={item.id} className="news__box" to="/subNews">
              <img src={fir} alt="img" />
              <div className="box__content">
                <h2>
                  <Link to={`/subnews/${item.id}`} className="news__link">{item.title}</Link>
                </h2>
              </div>
            </div>
          ))}
        </div>
        <Cerfitacion />
      </div>
    </PageContainer>
  );
};

export default News;