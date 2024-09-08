import React, { useState, useEffect } from 'react';
import AdminHeader from '../../components/AdminHeader/AdminHeader';
import SideBar from '../../components/SideBar/SideBar';
import axios from 'axios';

// Base64 resim türünü belirleyen yardımcı fonksiyon
const getImageType = (base64String) => {
  if (!base64String) return null;
  const mimeTypeMatch = base64String.match(/^data:image\/(.*?);base64,/);
  return mimeTypeMatch ? mimeTypeMatch[1] : null;
};

const AdminService = () => {
  const [data, setData] = useState([]);
  const [service, setService] = useState({
    name: "",
    description: "",
    file: null,
  });
  const [loading, setLoading] = useState(true);

  // Fetch data on component mount
  useEffect(() => {
    const storedData = localStorage.getItem('services');
    if (storedData) {
      setData(JSON.parse(storedData));
      setLoading(false); // Set loading to false after loading from local storage
    }

    // Fetch data from the API and update local storage
    axios
      .get("https://ngs-794fc9210221.herokuapp.com/api/services")
      .then((response) => {
        setData(response.data);
        localStorage.setItem('services', JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error("Error fetching services: ", error);
      })
      .finally(() => {
        setLoading(false); // Ensure loading is set to false after the fetch is done
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", service.file);
    formData.append("name", service.name);
    formData.append("description", service.description);

    axios
      .post("https://ngs-794fc9210221.herokuapp.com/api/services", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setData((prevData) => [...prevData, response.data]);
        setService({ name: "", description: "", file: null }); // Reset form
        window.alert("Service created successfully!");
      })
      .catch((error) => {
        console.error("Error adding service: ", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://ngs-794fc9210221.herokuapp.com/api/services/${id}`)
      .then(() => {
        // Remove deleted item from local state
        setData((prevData) => prevData.filter((item) => item.id !== id));
        window.alert("Service deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting service: ", error);
      });
  };

  return (
    <>
      <div className="admin__news">
        <AdminHeader />
        <div className="content__tab">
          <div className="left__bar">
            <SideBar />
          </div>
          <div className="post-list">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={service.name}
                    onChange={(e) => setService({ ...service, name: e.target.value })}
                    placeholder="Name"
                    required
                  />
                  <input
                    type="text"
                    value={service.description}
                    onChange={(e) => setService({ ...service, description: e.target.value })}
                    placeholder="Description"
                    required
                  />
                  <input
                    className="input__file"
                    type="file"
                    onChange={(e) => setService({ ...service, file: e.target.files[0] })}
                    required
                  />
                  <button type="submit">Submit</button>
                </form>
                <div className="adminservicedata">
                  {data.length > 0 ? (
                    data.map((item) => (
                      <div className="adminservices" key={item.id}>
                        {item.icon && (
                          <img
                            className="serviceadminimg"
                            src={`data:image/${getImageType(item.icon)};base64,${item.icon}`}
                            alt={item.name}
                          />
                        )}
                        <p className="adminservicename">{item.name}</p>
                        <p className="adminservicedescription">{item.description}</p>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                      </div>
                    ))
                  ) : (
                    <p>No services available</p>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminService;
