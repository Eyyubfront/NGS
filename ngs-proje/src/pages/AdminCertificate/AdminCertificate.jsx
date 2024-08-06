import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import SideBar from "../../components/SideBar/SideBar";
import axios from "axios";

// API URL'leri
const getCert = "https://ngs-794fc9210221.herokuapp.com/api/certificates/certificates";
const getCertByNumber = "https://ngs-794fc9210221.herokuapp.com/api/certificates/get-certificate/";
const addCert = "https://ngs-794fc9210221.herokuapp.com/api/certificates/add-certificate";
const updateCert = "https://ngs-794fc9210221.herokuapp.com/api/certificates/update-certificate";
const deleteCert = "https://ngs-794fc9210221.herokuapp.com/api/certificates/delete-certificate/";

const AdminCertificate = () => {
  const [certificates, setCertificates] = useState([]);
  const [updateNumber, setUpdateNumber] = useState("");
  const [updateValid, setUpdateValid] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [number, setNumber] = useState("");
  const [valid, setValid] = useState(false);
  const [owner, setOwner] = useState(""); // Yeni state ekledim

  useEffect(() => {
    axios.get(getCert)
      .then(({ data }) => {
        setCertificates(data);
      })
      .catch(e => {
        console.error("Error fetching certificates:", e);
      });
  }, []);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const token = "api__token";
    axios.post(addCert, { number, valid, owner }, {  // Owner'ı da ekledik
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(({ data }) => {
        console.log('Certificate added:', data);
        return axios.get(getCert);
      })
      .then(({ data }) => {
        setCertificates(data);
        setNumber("");
        setValid(false);
        setOwner(""); // Reset owner
      })
      .catch((e) => {
        console.error("Error adding certificate:", e);
      });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const token = "api__token";
    axios.put(updateCert, { number: updateNumber, valid: updateValid, owner }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(({ data }) => {
        console.log('Certificate updated:', data);
        return axios.get(getCert);
      })
      .then(({ data }) => {
        setCertificates(data);
        setIsUpdating(false);
        setUpdateNumber("");
        setUpdateValid(false);
        setOwner(""); // Reset owner
      })
      .catch((e) => {
        console.error("Error updating certificate:", e);
      });
  };

  const handleDelete = (certificateNumber) => {
    const token = "api__token";
    axios.delete(`${deleteCert}${certificateNumber}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        console.log('Certificate deleted');
        setCertificates((prev) => prev.filter((cert) => cert.number !== certificateNumber));
      })
      .catch((e) => {
        console.error("Error deleting certificate:", e);
      });
  };

  const handleGetCertificateByNumber = (certificateNumber) => {
    axios.get(`${getCertByNumber}${certificateNumber}`)
      .then(({ data }) => {
        console.log('Certificate data:', data);
        // Handle certificate data
      })
      .catch(e => {
        console.error("Error fetching certificate by number:", e);
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
            <input
              type="text"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              placeholder="Sahib"
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
              <input
                type="text"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                placeholder="Sahib"
              />
              <button className="notebtn" type="submit">Update</button>
            </form>
          )}
          <div className="datacertficate">
            {certificates.map(({ number, valid, owner }) => (  // Owner'ı da ekledik
              <p className="numberstext" key={number}>
                {number} - {String(valid)} - {owner} 
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
                    setOwner(owner); // Set owner for update
                  }}
                >Edit</button>
                <button
                  className="getbtn"
                  onClick={() => handleGetCertificateByNumber(number)}
                >Get</button>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCertificate;
