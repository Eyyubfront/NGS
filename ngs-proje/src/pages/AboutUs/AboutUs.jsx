import React, { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer";
import firstimg from "../../assets/images/aboutphoto/first.png";
import secondimg from "../../assets/images/aboutphoto/second.png";
import Training from "../../components/Training/Training";
import HomeServis from "../../components/Homeservice/Homeservice";
import axios from "axios";

const AboutUs = () => {
  const [abouts, setAbouts] = useState([]);

  // Fetch blog posts on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ngs-794fc9210221.herokuapp.com/api/about"
        );
        setAbouts(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
        setError("There was a problem fetching the data. Please try again.");
      }
    };

    fetchData();
  }, []);

  return (
    <PageContainer>
      {abouts.map((datas) => (
        <div id="aboutUs">
          <div className="about__head">
            <h1>{datas.title}</h1>
            <p>
              {datas.title}
            </p>
          </div>

          <div className="about__body">
            <div className="body__top reverse">
              <div className="body__text">
                <p>
                {datas.description}
                </p>
              </div>
              <div className="body__img">
                <img src={firstimg} alt="image" />
              </div>
            </div>

            <div className="body__top">
              <div className="body__img">
                <img src={secondimg} alt="image" />
              </div>
              <div className="body__text">
                <p>
                {datas.description}
                </p>
              </div>
            </div>
          </div>

          <div className="about__content">
            <div className="content__head">
              <h2>{datas.title}</h2>
            </div>

            <div className="content__text">
              <p>
              {datas.mission}
              </p>

              <ul>
                <li>• {datas.vision}</li>
                <li>
                  • {datas.vision}
                </li>
                <li>
                  • {datas.vision}
                </li>
                <li>
                  • {datas.vision}
                </li>
                <li>• {datas.vision}</li>
              </ul>

              <p>
              {datas.mission}
              </p>
            </div>
          </div>

          <div className="about__training">
            <Training />
          </div>

          <div className="about__service">
            <HomeServis />
          </div>
        </div>
      ))}
    </PageContainer>
  );
};

export default AboutUs;
