import React from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import SideBar from "../../components/SideBar/SideBar";

const AdminNews = () => {
  const posts = [
    {
      id: 1,
      image: "../../assets/images/homephoto/pageservicesix.png", // Replace with actual image paths
      title: "Təhlükəsiz mühitin əsasları nələrdir ?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Non euismod varius suspendisse facilisis viverra dignissim placerat. Enim felis in scelerisque ullamcorper ac dolor egestas. Ut nibh lorem tortor proin consectetur. Lorem sem erat gravida senectus varius felis at egestas felis...",
      views: "368 Baxış",
      date: "16 Yanvar 2024",
    },
    {
      id: 2,
      image: "../../assets/images/aboutphoto/first.png",
      title: "Təhlükəsiz mühitin əsasları nələrdir ?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Non euismod varius suspendisse facilisis viverra dignissim placerat. Enim felis in scelerisque ullamcorper ac dolor egestas. Ut nibh lorem tortor proin consectetur. Lorem sem erat gravida senectus varius felis at egestas felis...",
      views: "368 Baxış",
      date: "16 Yanvar 2024",
    },
    {
      id: 3,
      image: "../../assets/images/aboutphoto/second.png",
      title: "Təhlükəsiz mühitin əsasları nələrdir ?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Non euismod varius suspendisse facilisis viverra dignissim placerat. Enim felis in scelerisque ullamcorper ac dolor egestas. Ut nibh lorem tortor proin consectetur. Lorem sem erat gravida senectus varius felis at egestas felis...",
      views: "368 Baxış",
      date: "16 Yanvar 2024",
    },
    {
        id: 3,
        image: "../../assets/images/aboutphoto/second.png",
        title: "Təhlükəsiz mühitin əsasları nələrdir ?",
        content:
          "Lorem ipsum dolor sit amet consectetur. Non euismod varius suspendisse facilisis viverra dignissim placerat. Enim felis in scelerisque ullamcorper ac dolor egestas. Ut nibh lorem tortor proin consectetur. Lorem sem erat gravida senectus varius felis at egestas felis...",
        views: "368 Baxış",
        date: "16 Yanvar 2024",
      },
      {
        id: 3,
        image: "../../assets/images/aboutphoto/second.png",
        title: "Təhlükəsiz mühitin əsasları nələrdir ?",
        content:
          "Lorem ipsum dolor sit amet consectetur. Non euismod varius suspendisse facilisis viverra dignissim placerat. Enim felis in scelerisque ullamcorper ac dolor egestas. Ut nibh lorem tortor proin consectetur. Lorem sem erat gravida senectus varius felis at egestas felis...",
        views: "368 Baxış",
        date: "16 Yanvar 2024",
      },
  ];

  return (
    <div className="admin__news">
      <AdminHeader />
      <div className="content__tab">
        <div className="left__bar">
          <SideBar />
        </div>

        <div className="post-list">
          <div className="header">
            <button className="btn">Yazdıqlarınız (4)</button>
            <button className="btn">Hamısı</button>
          </div>
          {posts.map((post) => (
            <div key={post.id} className="post">
              <img src={post.image} alt={post.title} className="post-image" />
              <div className="post-content">
                <div className="content__header">
                  <h3 className="post-title">{post.title}</h3>
                  <div className="content__button">
                    <button className="edit-btn">✏️</button>
                    <button className="delete-btn">❌</button>
                  </div>
                </div>
                <p className="post-text">{post.content}</p>
                <div className="post-footer">
                  <span className="views">{post.views}</span>
                  <span className="date">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminNews;
