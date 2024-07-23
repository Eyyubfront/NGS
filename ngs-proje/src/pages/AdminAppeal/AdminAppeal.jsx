import React from "react";
import Appeals from "../../components/Appeals/Appeals";
import SideBar from "../../components/SideBar/SideBar";
import AdminHeader from "../../components/AdminHeader/AdminHeader";

const AdminAppeal = () => {
  return (
    <div className="admin">
        <AdminHeader/>
      <div className="content__tab">
        <div className="left__bar">
          <SideBar />
        </div>
        <Appeals/>
      </div>
    </div>
  );
};

export default AdminAppeal;
