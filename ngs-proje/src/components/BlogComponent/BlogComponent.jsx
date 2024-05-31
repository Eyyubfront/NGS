import React from "react";
import firstImg from "../../assets/images/homephoto/pageservicetwo.png";
import secondImg from "../../assets/images/homephoto/pageserviceone.png";
import thirdImg from "../../assets/images/homephoto/pageservicesix.png";
import fourthImg from "../../assets/images/homephoto/pageservicethree.png";

const BlogComponent = () => {
  return (
    <>
      <div id="blog__comp">
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
      </div>
    </>
  );
};

export default BlogComponent;
