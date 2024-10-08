import React, { useEffect, useState } from "react";
import firstImg from "../../assets/images/homephoto/pageservicetwo.png";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import axios from "axios";


const BlogComponent = () => {
  const { t } = useTranslation();
  const [blogPosts, setBlogPosts] = useState([]);

  // Fetch blog posts on component mount
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(
          "https://ngs-794fc9210221.herokuapp.com/api/blogs"
        );
        setBlogPosts(response.data);
        console.log("Blog posts fetched:", response.data);
      } catch (error) {
        console.error("Error fetching blog posts", error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <>
      <div id="blog__comp">
        {blogPosts.map((item) => (
          <div className="imgs__container" key={item.id}>
            <div className="position__elements">
              <img src={firstImg} alt="img" />
              <div className="element__content">
                <span className="element__span">{item.title}</span>
                <div className="element__btn">
                  <Link to={`/blog/${item.id}`}>
                    <button>{t('read')}</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogComponent;
