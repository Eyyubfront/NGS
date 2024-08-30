import React, { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer";
import Cerfitacion from "../../components/Certifaciton/cerfitacion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import fir from "../../assets/images/news/first.png";
import sec from "../../assets/images/news/sec.png";
import thi from "../../assets/images/news/three.png";
import four from "../../assets/images/news/four.png";
import five from "../../assets/images/news/five.png";
import six from "../../assets/images/news/six.png";
import sev from "../../assets/images/news/seven.png";
import eig from "../../assets/images/news/eight.png";
import nine from "../../assets/images/news/nine.png";

const News = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    fetch("https://ngs-794fc9210221.herokuapp.com/api/news")
      .then((response) => response.json())
      .then((data) => {
        const fetchedTitles = data.map((item) => item.title);
        setTitles(fetchedTitles);
      })
      .catch((error) => console.error("Error fetching the news:", error));
  }, []);

  console.log(titles);
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
          {titles.map((title, id, index) => (
            <div key={id} className="news__box" to="/subNews">
              <img src={fir} alt="img" />
              <div className="box__content">
                <h2>
                  <Link to={`/news/${id}`} className="news__link">{title}</Link>
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

News.propTypes = { title: PropTypes.string.isRequired }
News.propTypes = { id: PropTypes.number.isRequired }

export default News;