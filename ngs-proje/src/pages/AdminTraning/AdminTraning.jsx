import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import SideBar from "../../components/SideBar/SideBar";

const AdminTraning = () => {
  const [eventData, setEventData] = useState({
    id: "",
    name: "",
    description: "",
    date: "",
    location: "", // location özelliğini ekledik
  });

  const [events, setEvents] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Verileri çekmek için GET isteği
    const fetchData = async () => {
      try {
        const response = await axios.get("https://ngs-794fc9210221.herokuapp.com/api/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      handleUpdate();
    } else {
      try {
        const response = await axios.post(
          "https://ngs-794fc9210221.herokuapp.com/api/events/save",
          eventData
        );
        console.log("Response:", response.data);
        setEvents([...events, response.data]);
        setEventData({ id: "", name: "", description: "", date: "", location: "" }); // location'ı sıfırla
        alert("Etkinlik başarıyla kaydedildi!");
      } catch (error) {
        console.error("Error posting data:", error);
        alert("Etkinlik kaydedilirken bir hata oluştu.");
      }
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `https://ngs-794fc9210221.herokuapp.com/api/events/${eventData.id}`,
        eventData
      );
      console.log("Response:", response.data);
      setEvents(events.map(event => (event.id === eventData.id ? response.data : event)));
      setEventData({ id: "", name: "", description: "", date: "", location: "" });
      setIsEditing(false);
      alert("Etkinlik başarıyla güncellendi!");
    } catch (error) {
      console.error("Error updating data:", error);
      alert("Etkinlik güncellenirken bir hata oluştu.");
    }
  };

  const handleEdit = (event) => {
    setEventData(event);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://ngs-794fc9210221.herokuapp.com/api/events/${id}`);
      setEvents(events.filter(event => event.id !== id));
      alert("Etkinlik başarıyla silindi!");
    } catch (error) {
      console.error("Error deleting data:", error);
      alert("Etkinlik silinirken bir hata oluştu.");
    }
  };

  return (
    <div className="admin__news">
      <AdminHeader />
      <div className="content__tab">
        <div className="left__bar">
          <SideBar />
        </div>
        <div className="right__content">
          <h2>{isEditing ? "Etkinliği Güncelle" : "Yeni məlumat daxil et"}</h2>
          <form className="allinpts" onSubmit={handleSubmit}>
            <div className="inputdirection">
              <label htmlFor="name">Ad</label>
              <input
                className="input"
                type="text"
                id="name"
                name="name"
                value={eventData.name}
                onChange={handleChange}
              />
            </div>
            <div className="inputdirection">
              <label htmlFor="description">Təsviri</label>
              <input
                className="input"
                type="text"
                id="description"
                name="description"
                value={eventData.description}
                onChange={handleChange}
              />
            </div>
            <div className="inputdirection">
              <label htmlFor="date">Zaman</label>
              <input
                className="input"
                type="date"
                id="date"
                name="date"
                value={eventData.date}
                onChange={handleChange}
              />
            </div>
            <div className="inputdirection">
              <label htmlFor="location">Məkan</label>
              <input
                className="input"
                type="text"
                id="location"
                name="location"
                value={eventData.location}
                onChange={handleChange}
              />
            </div>
            <button className="creatbtn" type="submit">
              {isEditing ? "Yadda saxla" : "Yarat"}
            </button>
          </form>
          <h2>Bütün məlumatlar</h2>
          <ul>
            {events.map((event, index) => (
              <li key={index}>
                <strong>Ad:</strong> {event.name} <br />
                <strong>Təsviri:</strong> {event.description} <br />
                <strong>Zaman:</strong> {event.date} <br />
                <strong>Məkan:</strong> {event.location} <br />
                <button onClick={() => handleEdit(event)}>Güncəllə</button>
                <button onClick={() => handleDelete(event.id)}>Sil</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminTraning;
