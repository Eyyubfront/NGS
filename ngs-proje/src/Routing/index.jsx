import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Servicesection from "../pages/Servicesection/Servicesection";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import Blogs from "../pages/Blogs/Blogs";
import News from "../pages/News/News";
import Traningpages from "../pages/Traningpages/Traningpages";
import Traningsid from "../pages/Traningsid/Traningsid";
import Servicesub from "../pages/Servicesub/Servicesub";
import Servicesubinfo from "../pages/Servicesubinfo/Servicesubinfo";
import Blog from "../pages/Blog/Blog";
import SubNews from "../pages/SubNews/SubNews";
import Admin from "../pages/Admin/Admin";
import AdminAppeal from "../pages/AdminAppeal/AdminAppeal";
import AdminNews from "../pages/AdminNews/AdminNews";
import AdminService from "../pages/AdminService/AdminService";
import AdminCertificate from "../pages/AdminCertificate/AdminCertificate";
import AdminFormService from "../pages/AdminFormService/AdminFormService";
import AdminTraning from "../pages/AdminTraning/AdminTraning";
import AdminBlog from "../pages/AdminBlog/AdminBlog";
import AdminAbout from "../pages/AdminAbout/AdminAbout";
import Login from "../pages/Login/index";
import Register from "../pages/Registerpage/Register";
import Profil from "../pages/Profil/Profil";
import Notfound from "../pages/Notfound/notfound";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/notfound" element={<Notfound />} />
      <Route path="/servicesection" element={<Servicesection />} />
      <Route path="/servicesection/:id" element={<Servicesub />} />
      <Route path="/servicessub/:id" element={<Servicesubinfo />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/news" element={<News />} />
      <Route path="/subnews/:newsId" element={<SubNews />} />
      <Route path="/traningpages" element={<Traningpages />} />
      <Route path="/traningids/:id" element={<Traningsid />} />
      <Route path="/adminprof" element={<Admin />} />
      <Route path="/appeal" element={<AdminAppeal />} />
      <Route path="/adminnews" element={<AdminNews />} />
      <Route path="/adminservices" element={<AdminService />} />
      <Route path="/admincertificate" element={<AdminCertificate />} />
      <Route path="/adminformservice" element={<AdminFormService />} />
      <Route path="/admintraning" element={<AdminTraning />} />
      <Route path="/adminblog" element={<AdminBlog />} />
      <Route path="/adminabout" element={<AdminAbout />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default Routing;
