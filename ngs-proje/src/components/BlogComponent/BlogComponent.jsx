import React from "react";
import firstImg from "../../assets/images/homephoto/pageservicetwo.png";
import secondImg from "../../assets/images/homephoto/pageserviceone.png";
import thirdImg from "../../assets/images/homephoto/pageservicesix.png";
import fourthImg from "../../assets/images/homephoto/pageservicethree.png";
import { Link } from "react-router-dom";

const BlogComponent = () => {
  const blogData = [
    {
      id: 1,
      imgSrc: firstImg,
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 2,
      imgSrc: secondImg,
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 3,
      imgSrc: thirdImg,
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 4,
      imgSrc: fourthImg,
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 1,
      imgSrc: firstImg,
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 2,
      imgSrc: secondImg,
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 3,
      imgSrc: thirdImg,
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 4,
      imgSrc: fourthImg,
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  return (
    <>
      <div id="blog__comp">
        {blogData.map((item) => (
          <div className="imgs__container" key={item.id}>
            <div className="position__elements">
              <img src={item.imgSrc} alt="img" />
              <div className="element__content">
                <span className="element__span">{item.text}</span>
                <div className="element__btn">
                  <Link to="/blog">
                    <button>Oxu</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div id="blog__comp">
        <div className="imgs__container">
          <div className="position__elements">
            <img src={firstImg} alt="img" />
            <div className="element__content">
              <span className="element__span">Lorem ipsum dolor sit amet consectetur.</span>
              <div className="element__btn">
                <button>Oxu</button>
              </div>
            </div>
          </div>

          <div className="position__elements">
            <img src={secondImg} alt="img" />
            <div className="element__content">
              <span className="element__span">Lorem ipsum dolor sit amet consectetur.</span>
              <div className="element__btn">
                <button>Oxu</button>
              </div>
            </div>
          </div>          
        </div>


        <div className="imgs__container">
          <div className="position__elements">
            <img src={thirdImg} alt="img" />
            <div className="element__content">
              <span className="element__span">Lorem ipsum dolor sit amet consectetur.</span>
              <div className="element__btn">
                <button>Oxu</button>
              </div>
            </div>
          </div>

          <div className="position__elements">
            <img src={fourthImg} alt="img" />
            <div className="element__content">
              <span className="element__span">Lorem ipsum dolor sit amet consectetur.</span>
              <div className="element__btn">
                <button>Oxu</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default BlogComponent;