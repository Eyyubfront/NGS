import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminHeader from '../../components/AdminHeader/AdminHeader';
import SideBar from '../../components/SideBar/SideBar';
import { FaTrash } from "react-icons/fa"; 
const AdminFormService = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    subject: "",
    message: "",
  });

  // Fetch existing data
  useEffect(() => {
    axios.get('https://ngs-794fc9210221.herokuapp.com/api/formData')
      .then(response => {
        setData(response.data); // Varsayımsal: API'den veri alma
      })
      .catch(e => {
        console.error("There was an error fetching the data!", e);
      });
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://ngs-794fc9210221.herokuapp.com/api/formData/save?firstName=${form.firstName}&lastName=${form.lastName}&email=${form.email}&country=${form.country}&city=${form.city}&subject=${form.subject}&message=${form.message}`;
    axios.post(url, { formRequestDTO: form })
      .then(response => {
>>>>>>> main
        console.log(response.data);
        setData([...data, response.data]); // Yeni veriyi ekle
      })
      .catch((e) => {
        console.error("There was an error!", e);
      });
  };

  const deleteData = (id) => {
    const url = `https://ngs-794fc9210221.herokuapp.com/api/formData/${id}`;
    axios.delete(url)
      .then(() => {
        setData(data.filter(item => item.id !== id)); // Silinen öğeyi filtrele
      })
      .catch(e => {
        console.error("There was an error deleting the data!", e);
      });
  };

  return (
    <div className="admin__formservice">
      <AdminHeader />
      <div className="formcards">
        <div className="left__bar">
          <SideBar />
        </div>
        <div className="inputs_cards">
          <div className="form__container">
            <form className='form' onSubmit={handleSubmit}>
              <input
                className='inputsform'
                type="text"
                name="firstName"
                placeholder="AD"
                value={form.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                className='inputsform'
                name="lastName"
                placeholder="SOYAD"
                value={form.lastName}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                className='inputsform'
                placeholder="MAIL"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="country"
                placeholder="ÖLKƏ"
                value={form.country}
                className='inputsform'
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="ŞƏHƏR"
                className='inputsform'
                value={form.city}
                onChange={handleChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="MÖVZU"
                value={form.subject}
                className='inputsform'
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="MESAJ"
                value={form.message}
                className='inputsform'
                onChange={handleChange}
              ></textarea>
              <button type="submit">Yarat</button>
            </form>
          </div>
          <div className="data__list">
            {data.map((item) => (
              <div key={item.id} className="data__item">
                <strong>First Name: </strong> {item.firstName}, <br />
                <strong>Email: </strong> {item.email}, <br />
                <strong>Country: </strong> {item.country}, <br />
                <strong>City: </strong> {item.city}, <br />
                <strong>Subject: </strong> {item.subject}, <br />
                <strong>Message: </strong> {item.message} <br />
                <button className='deletsservicesform' onClick={() => deleteData(item.id)}><FaTrash /> </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFormService;

