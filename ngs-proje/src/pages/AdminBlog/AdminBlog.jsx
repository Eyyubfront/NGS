import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import SideBar from "../../components/SideBar/SideBar";

const AdminBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [blogPosts, setBlogPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

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

  // Reset error when title or content changes
  useEffect(() => {
    if (error) setError("");
  }, [title, content]);

  const MAX_CHUNK_SIZE = 1000; // Define max chunk size

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !content) {
      setError("Both title and content are required.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    // Split content into chunks
    const contentChunks = [];
    for (let i = 0; i < content.length; i += MAX_CHUNK_SIZE) {
      contentChunks.push(content.slice(i, i + MAX_CHUNK_SIZE));
    }

    try {
      if (editingPost) {
        // Update existing post
        for (let i = 0; i < contentChunks.length; i++) {
          const response = await axios.put(
            `https://ngs-794fc9210221.herokuapp.com/api/blogs/${editingPost.id}`,
            {
              title,
              content: contentChunks[i],
              chunkIndex: i,
              isLastChunk: i === contentChunks.length - 1,
            }
          );
          console.log(
            `Chunk ${i + 1} of ${contentChunks.length} updated:`,
            response.data
          );

          // If last chunk, update the state
          if (i === contentChunks.length - 1) {
            setBlogPosts(
              blogPosts.map((post) =>
                post.id === editingPost.id ? response.data : post
              )
            );
          }
        }
        setEditingPost(null);
      } else {
        // Create new post
        let newPost = null;
        for (let i = 0; i < contentChunks.length; i++) {
          const response = await axios.post(
            "https://ngs-794fc9210221.herokuapp.com/api/blogs/save",
            {
              title,
              content: contentChunks[i],
              chunkIndex: i,
              isLastChunk: i === contentChunks.length - 1,
            }
          );
          console.log(
            `Chunk ${i + 1} of ${contentChunks.length} created:`,
            response.data
          );

          // Capture the response of the last chunk
          if (i === contentChunks.length - 1) {
            newPost = response.data;
          }
        }
        setBlogPosts([...blogPosts, newPost]);
      }

      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error submitting blog post", error);
      setError(
        `There was an error ${
          editingPost ? "updating" : "creating"
        } the blog post.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setTitle(post.title);
    setContent(post.content);
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(
        `https://ngs-794fc9210221.herokuapp.com/api/blogs/${postId}`
      );
      console.log("Blog post deleted:", postId);

      setBlogPosts(blogPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting blog post", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingPost(null);
    setTitle("");
    setContent("");
  };

  return (
    <div className="admin__blog">
      <AdminHeader />
      <div className="content__tab">
        <div className="left__bar">
          <SideBar />
        </div>
        <div className="blog__right">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label>Content:</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? "Submitting..."
                : editingPost
                ? "Update"
                : "Submit"}
            </button>
            {editingPost && (
              <button type="button" onClick={handleCancelEdit}>
                Cancel
              </button>
            )}
          </form>

          <div className="submitted__data">
            <h3>Blog Posts</h3>
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <div key={post.id} className="blog__post">
                  <h4>{post.title}</h4>
                  <p>{post.content}</p>
                  <button onClick={() => handleEdit(post)}>Edit</button>
                  <button onClick={() => handleDelete(post.id)}>Delete</button>
                </div>
              ))
            ) : (
              <p>No blog posts available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBlog;
