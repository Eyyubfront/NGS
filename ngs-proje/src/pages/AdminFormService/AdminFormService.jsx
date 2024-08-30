import React, { useState } from "react";
import axios from "axios";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import SideBar from "../../components/SideBar/SideBar";

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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://ngs-794fc9210221.herokuapp.com/api/formData/save?firstName=${form.firstName}&lastName=${form.lastName}&email=${form.email}&country=${form.country}&city=${form.city}&subject=${form.subject}&message=${form.message}`;
    axios
      .post(url, { formRequestDTO: form })
      .then((response) => {
        console.log(response.data);
        setData([...data, response.data]);
      })
      .catch((e) => {
        console.error("There was an error!", e);
      });
  };

  return (
    <div className="admin__formservice">
      <AdminHeader />
      <div className="left__bar">
        <SideBar />
      </div>
      <div className="form__container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={form.country}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="data__list">
        {data.map((item, index) => (
          <div key={index} className="data__item">
            <p>First Name: {item.firstName}</p>
            <p>Last Name: {item.lastName}</p>
            <p>Email: {item.email}</p>
            <p>Country: {item.country}</p>
            <p>City: {item.city}</p>
            <p>Subject: {item.subject}</p>
            <p>Message: {item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminFormService;

