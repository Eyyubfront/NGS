import React from 'react'

const Appeals = () => {

    const data = [
        { date: "16.01.2024", name: "Rəsul Hacıyev", type: "Audit", location: "Bakı" },
        { date: "16.01.2024", name: "Rəsul Hacıyev", type: "Audit", location: "Bakı" },
        { date: "16.01.2024", name: "Rəsul Hacıyev", type: "Audit", location: "Bakı" },
        { date: "16.01.2024", name: "Rəsul Hacıyev", type: "Audit", location: "Bakı" },
        { date: "16.01.2024", name: "Rəsul Hacıyev", type: "Audit", location: "Bakı" },
        { date: "16.01.2024", name: "Rəsul Hacıyev", type: "Audit", location: "Bakı" },
        { date: "16.01.2024", name: "Rəsul Hacıyev", type: "Audit", location: "Bakı" },
        { date: "16.01.2024", name: "Rəsul Hacıyev", type: "Audit", location: "Bakı" },
        { date: "16.01.2024", name: "Rəsul Hacıyev", type: "Audit", location: "Bakı" },
        { date: "16.01.2024", name: "Rəsul Hacıyev", type: "Audit", location: "Bakı" },
        { date: "16.01.2024", name: "Rəsul Hacıyev", type: "Audit", location: "Bakı" },
        { date: "16.01.2024", name: "Rəsul Hacıyev", type: "Audit", location: "Bakı" },
      ];

  return (
    <div className="table-container">
      <div className="tabs">
        <button className="tab active">Yeni (9)</button>
        <button className="tab">Oxunmuş</button>
      </div>
      <div className="table">
        {data.map((item, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell status"><span className="status-dot"></span></div>
            <div className="table-cell date"><span role="img" aria-label="calendar">📅</span> {item.date}</div>
            <div className="table-cell name">{item.name}</div>
            <div className="table-cell action">{item.type}</div>
            <div className="table-cell location">{item.location}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Appeals