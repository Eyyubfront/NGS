import React, { useState } from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import SideBar from "../../components/SideBar/SideBar";
import axios from "axios";

const getImageType = (base64String) => {
  if (!base64String) return null;

  const mimeTypeMatch = base64String.match(/^data:image\/(.*?);base64,/);
  if (mimeTypeMatch && mimeTypeMatch[1]) {
    return mimeTypeMatch[1]; // Return the extension (e.g., 'png', 'jpeg')
  }
  return null; // Return null if no extension is found
};

const AdminService = () => {
  const [data, setData] = useState([]);
  const [service, setService] = useState({
    name: "",
    description: "",
    file: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", service.file);

    const urlWithParams = `https://ngs-794fc9210221.herokuapp.com/api/services?name=${service.name}&description=${service.description}`;

    axios
      .post(urlWithParams, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Service added:", response.data);
        // Add newly added service to the state
        setData([...data, response.data]);
      })
      .catch((error) => {
        console.error("Error adding service: ", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://ngs-794fc9210221.herokuapp.com/api/services/${id}`)
      .then(() => {
        console.log("Service deleted");
        // Remove deleted service from the state
        setData(data.filter((item) => item.id !== id));
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={service.name}
              onChange={(e) => setService({ ...service, name: e.target.value })}
              placeholder="Ad/Soyad"
            />
            <input
              type="text"
              value={service.description}
              onChange={(e) =>
                setService({ ...service, description: e.target.value })
              }
              placeholder="Description"
            />
            <input
              type="file"
              onChange={(e) => setService({ ...service, file: e.target.files[0] })}
            />
            <button type="submit">Qeyd ol</button>
          </form>
          <div className="adminservicedata">
            {data.map((item, index) => (
              <div className="adminservices" key={index}>
                {item.icon && (
                  <img
                  className="serviceadminimg"
                    src={`data:image/${getImageType(item.icon)};base64,${item.icon}`}
                    alt={item.name}
                  />
                )}
                <p className="adminservicename">{item.name}</p>
                <p className="adminservicedescription">{item.description}</p>
                <button onClick={() => handleDelete(item.id)}>Sil</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div>
      sakam
    </div>
    </>
  );
};

export default AdminService;
