import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import SideBar from "../../components/SideBar/SideBar";

const AdminNews = () => {
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch news data from the API on component mount
  useEffect(() => {
    fetchNews();
  }, []); // Empty array means this effect runs only on mount

  const fetchNews = () => {
    axios
      .get("https://ngs-794fc9210221.herokuapp.com/api/news")
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  };

const MAX_CHUNK_SIZE = 1000; // Define max chunk size

const handleSubmit = async (e) => {
  e.preventDefault();

  const newPost = {
    title,
    content: [], // We'll push content chunks into this array
    date: new Date().toISOString(),
  };

  // Split content into chunks
  for (let i = 0; i < content.length; i += MAX_CHUNK_SIZE) {
    newPost.content.push(content.slice(i, i + MAX_CHUNK_SIZE));
  }

  try {
    if (editMode) {
      // Update existing post
      const responses = await Promise.all(
        newPost.content.map((chunk, index) =>
          axios.put(`https://ngs-794fc9210221.herokuapp.com/api/news/${editId}`, {
            ...newPost,
            content: chunk,
            chunkIndex: index,
            isLastChunk: index === newPost.content.length - 1,
          })
        )
      );
      setNews(
        news.map((post) => (post.id === editId ? responses[responses.length - 1].data : post))
      );
    } else {
      // Create new post
      const responses = await Promise.all(
        newPost.content.map((chunk, index) =>
          axios.post("https://ngs-794fc9210221.herokuapp.com/api/news/save", {
            ...newPost,
            content: chunk,
            chunkIndex: index,
            isLastChunk: index === newPost.content.length - 1,
          })
        )
      );
      setNews([...news, responses[responses.length - 1].data]); // Use last response data
    }
    resetForm();
  } catch (error) {
    console.error("Error posting/updating news:", error);
  }
};

  const handleEdit = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditId(post.id);
    setEditMode(true);
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://ngs-794fc9210221.herokuapp.com/api/news/${id}`)
      .then(() => {
        setNews(news.filter((post) => post.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting news:", error);
      });
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setEditId(null);
    setEditMode(false);
  };

  return (
    <div className="admin__news">
      <AdminHeader />
      <div className="content__tab">
        <div className="left__bar">
          <SideBar />
        </div>
        <div className="post-list">
          <div className="post__news">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Title:</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Content:</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>
              <button type="submit">{editMode ? "Update" : "Submit"}</button>
            </form>
          </div>
          <div className="posts">
            {news.map((post) => (
              <div className="post" key={post.id}>
                <div className="post-content">
                  <div className="content__header">
                    <h3 className="post-title">{post.title}</h3>
                    <div className="content__button">
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(post)}
                      >
                        ✏️
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(post.id)}
                      >
                        ❌
                      </button>
                    </div>
                  </div>
                  <p className="post-text">{post.content}</p>
                  <div className="post-footer">
                    <span className="views">{post.views} views</span>
                    <span className="date">{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNews;