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
    axios.post('https://ngs-794fc9210221.herokuapp.com/api/formData/save', form)
      .then(response => {
        setData([...data, response.data]); // Yeni veriyi ekle
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          country: "",
          city: "",
          subject: "",
          message: "",
        }); // Formu sıfırla
      })
      .catch((e) => {
        console.error("There was an error!", e);
      });
  };

  const deleteData = (id) => {
    axios.delete(`https://ngs-794fc9210221.herokuapp.com/api/formData/${id}`)
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
              <div className='form__group'>
                <label htmlFor="firstName">Name</label>
                <input
                  className='inputsform'
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Name"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className='form__group'>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className='inputsform'
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className='form__group'>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className='inputsform'
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className='form__group'>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country"
                  value={form.country}
                  className='inputsform'
                  onChange={handleChange}
                />
              </div>
              <div className='form__group'>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  className='inputsform'
                  value={form.city}
                  onChange={handleChange}
                />
              </div>
              <div className='form__group'>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  value={form.subject}
                  className='inputsform'
                  onChange={handleChange}
                />
              </div>
              <div className='form__group'>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  value={form.message}
                  className='inputsform'
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="data__list">
            {data.map((item) => (
              <div key={item.id} className="data__item">
                <strong>Name: </strong> {item.firstName}, <br />
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
