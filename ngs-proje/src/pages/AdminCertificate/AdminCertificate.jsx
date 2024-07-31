import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import SideBar from "../../components/SideBar/SideBar";
import axios from "axios";

const getCert = "https://ngs-794fc9210221.herokuapp.com/api/admin/certificates";
const addCert = "https://ngs-794fc9210221.herokuapp.com/api/admin/add-certificate";
const delCert = "https://ngs-794fc9210221.herokuapp.com/api/admin/delete-certificate/";
const putCert = "https://ngs-794fc9210221.herokuapp.com/api/admin/update-certificate";

const AdminCertificate = () => {
  const [certificates, setCertificates] = useState([]);
  const [updateNumber, setUpdateNumber] = useState("");
  const [updateValid, setUpdateValid] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [number, setNumber] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    axios.get(getCert).then(({ data }) => {
      setCertificates(data);
    }).catch(e => {
      console.error("Error fetching certificates:", e);
    });
  }, []);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const token = "api__token";
    axios.post(addCert, { number, valid }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        console.log('Certificate added');
        return axios.get(getCert);
      })
      .then(({ data }) => {
        setCertificates(data);
        setNumber("");
        setValid(false);
      })
      .catch((e) => {
        console.error("Error adding certificate:", e);
      });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const token = "api__token";
    axios.put(`${putCert}${number}`, { number: updateNumber, valid: updateValid }, {
  
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    
    })
      .then(() => {
        console.log('Certificate updated');
        return axios.get(getCert);
      })
      .then(({ data }) => {
        setCertificates(data);
        setIsUpdating(false);
        setUpdateNumber("");
        setUpdateValid(false);
      })
      .catch((e) => {
        console.error("Error updating certificate:", e);
      });
  };

  const handleDelete = (number) => {
    const token = "api__token";
    axios.delete(`${delCert}${number}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        console.log('Certificate deleted');
        setCertificates((prev) => prev.filter((e) => e.number !== number));
      })
      .catch((e) => {
        console.error("Error deleting certificate:", e);
      });
  };

  return (
    <div className="admin__news">
      <AdminHeader />
      <div className="content__tab">
        <div className="left__bar">
          <SideBar />
        </div>
        <div className="post-list">
          <form onSubmit={handleAddSubmit}>
            <input
              className="inputnumber"
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Sertifikat nomresi"
            />
            <input
              type="checkbox"
              checked={valid}
              onChange={(e) => setValid(e.target.checked)}
              placeholder="Validdirmi"
            />
            <button className="notebtn" type="submit">Qeyd ol</button>
          </form>
          {isUpdating && (
            <form onSubmit={handleUpdateSubmit}>
              <input
                type="text"
                value={updateNumber}
                onChange={(e) => setUpdateNumber(e.target.value)}
                placeholder="Sertifikat nomresi"
              />
              <input
                type="checkbox"
                checked={updateValid}
                onChange={(e) => setUpdateValid(e.target.checked)}
                placeholder="Validdirmi"
              />
              <button className="notebtn" type="submit">Update</button>
            </form>
          )}
          <div className="datacertficate">
            {certificates.map(({ number, valid }) => (
              <p className="numberstext" key={number}>
                {number} - {String(valid)}
                <button
                  className="closexbtn"
                  onClick={() => handleDelete(number)}
                >x</button>
                <button
                  className="editbtn"
                  onClick={() => {
                    setIsUpdating(true);
                    setUpdateNumber(number);
                    setUpdateValid(valid);
                  }}
                >Edit</button>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCertificate;
