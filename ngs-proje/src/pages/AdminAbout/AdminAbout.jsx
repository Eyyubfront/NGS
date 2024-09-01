import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import SideBar from "../../components/SideBar/SideBar";

const AdminAbout = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    mission: "",
    vision: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dataList, setDataList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch all data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ngs-794fc9210221.herokuapp.com/api/about"
        );
        setDataList(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
        setError("There was a problem fetching the data. Please try again.");
      }
    };

    fetchData();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.title || !formData.description || !formData.mission || !formData.vision) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    setError(null);

    try {

        
      if (isEditing && editId) {
        // Edit existing data
        const response = await axios.put(
          `https://ngs-794fc9210221.herokuapp.com/api/about/${editId}`,
          formData
        );
        // Update the list with the edited item
        setDataList((prevDataList) =>
          prevDataList.map((item) =>
            item.id === editId ? response.data : item
          )
        );
      } else {
        // Create new data
        const response = await axios.post(
          "https://ngs-794fc9210221.herokuapp.com/api/about/add",
          formData
        );
        // Add the new item to the list
        setDataList((prevDataList) => [...prevDataList, response.data]);
      }

      // Save the submitted data to state
      setSubmittedData(formData);

      // Reset form and states
      setIsEditing(false);
      setEditId(null);
    } catch (error) {
      console.error("Error submitting form", error);
      setError("There was a problem submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Reset form data after successful submission or when editing is cancelled
  useEffect(() => {
    if (submittedData || !isEditing) {
      setFormData({
        title: "",
        description: "",
        mission: "",
        vision: "",
      });
    }
  }, [submittedData, isEditing]);

  // Handle edit action
  const handleEdit = (item) => {
    setFormData({
      title: item.title,
      description: item.description,
      mission: item.mission,
      vision: item.vision,
    });
    setIsEditing(true);
    setEditId(item.id);
  };

  // Handle delete action
  const handleDelete = async (id) => {
    if (!id) {
      setError("Invalid ID for deletion.");
      return;
    }

    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await axios.delete(`https://ngs-794fc9210221.herokuapp.com/api/about/${id}`);
        // Remove the deleted item from the list
        setDataList((prevDataList) => prevDataList.filter((item) => item.id !== id));
      } catch (error) {
        console.error("Error deleting data", error);
        setError("There was a problem deleting the item. Please try again.");
      }
    }
  };

  return (
    <div className="admin__about">
      <AdminHeader />
      <div className="content__tab">
        <div className="left__bar">
          <SideBar />
        </div>
        <div className="about-list">
          <div className="data__div">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Description:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Mission:</label>
                <input
                  type="text"
                  name="mission"
                  value={formData.mission}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Vision:</label>
                <input
                  type="text"
                  name="vision"
                  value={formData.vision}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : isEditing ? "Update" : "Submit"}
              </button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div className="scroller">
              <h3>About Us:</h3>
              {dataList.length > 0 ? (
                <ul>
                  {dataList.map((item) => (
                    <li key={item.id}>
                      <h4>{item.title}</h4>
                      <p>Description: {item.description}</p>
                      <p>Mission: {item.mission}</p>
                      <p>Vision: {item.vision}</p>
                      <button onClick={() => handleEdit(item)}>Edit</button>
                      <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No data available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAbout;
