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
      <div id="aboutUs">
        <div className="about__head">
          <h1>NGS - Təhlükəsizliyin yeni nəsli!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis odio fermentum lacus
            porta tristique nunc pretium. Pulvinar montes sed elementum sed
            viverra integer fermentum.
          </p>
        </div>

        <div className="about__body">
          <div className="body__top reverse">
            <div className="body__text">
              <p>
                <span>Lorem</span> ipsum dolor sit amet consectetur. Eget aenean
                nisi urna amet. Enim mattis nunc arcu a nisl eu ipsum. Turpis
                gravida elementum praesent mattis vulputate sed aliquet
                volutpat. Egestas ante et cursus orci lacus. Odio consectetur eu
                praesent rutrum libero cursus ante in. Eu lobortis pharetra
                condimentum arcu netus. Pretium ut consequat viverra amet sem
                dictumst volutpat ullamcorper. Eleifend suspendisse diam cursus
                egestas dis id quisque. A pretium aliquet blandit at cras
                convallis et pellentesque. Sit gravida euismod tristique donec.
                Ut posuere proin sagittis odio. Sit pellentesque massa eleifend
                tempor risus. Nullam quis egestas sollicitudin hac.
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
                <span>Lorem</span> ipsum dolor sit amet consectetur. Eget aenean
                nisi urna amet. Enim mattis nunc arcu a nisl eu ipsum. Turpis
                gravida elementum praesent mattis vulputate sed aliquet
                volutpat. Egestas ante et cursus orci lacus. Odio consectetur eu
                praesent rutrum libero cursus ante in. Eu lobortis pharetra
                condimentum arcu netus. Pretium ut consequat viverra amet sem
                dictumst volutpat ullamcorper. Eleifend suspendisse diam cursus
                egestas dis id quisque. A pretium aliquet blandit at cras
                convallis et pellentesque. Sit gravida euismod tristique donec.
                Ut posuere proin sagittis odio. Sit pellentesque massa eleifend
                tempor risus. Nullam quis egestas sollicitudin hac.
              </p>
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className="content__head">
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          </div>

          <div className="content__text">
            <p>
              Lorem ipsum dolor sit amet consectetur. Quis odio fermentum lacus
              porta tristique nunc pretium. Pulvinar montes sed elementum sed
              viverra integer fermentum:
            </p>

            <ul>
              <li>• Lorem ipsum dolor sit amet consectetur.</li>
              <li>
                • Eleifend suspendisse diam cursus egestas dis id quisque.
              </li>
              <li>
                • Pretium ut consequat viverra amet sem dictumst volutpat
                ullamcorper.
              </li>
              <li>
                • Ut posuere proin sagittis odio. Sit pellentesque massa
                eleifend tempor risus.
              </li>
              <li>• Lorem ipsum dolor sit amet consectetur.</li>
            </ul>

            <p>
              Lorem ipsum dolor sit amet consectetur. Quis odio fermentum lacus
              porta tristique nunc pretium. Pulvinar montes sed elementum sed
              viverra integer fermentum. Egestas ante et cursus orci lacus. Odio
              consectetur eu praesent rutrum libero cursus ante in. Eu lobortis
              pharetra condimentum arcu netus. Pretium ut consequat viverra amet
              sem dictumst volutpat ullamcorper. Eleifend suspendisse diam
              cursus egestas dis id quisque.
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
    </PageContainer>
  );
};

export default AboutUs;
