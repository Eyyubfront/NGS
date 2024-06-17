import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Servicesection from "../pages/Servicesection/Servicesection";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import Blogs from "../pages/Blogs/Blogs";
import News from "../pages/News/News";
import Traningpages from "../pages/Traningpages/Traningpages";
import Traningsid from "../pages/Traningsid/Traningsid";
import Servicesub from '../pages/Servicesub/Servicesub';


const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicesection" element={<Servicesection />} />
      <Route path="/servicesection/:id" element={<Servicesub />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/news" element={<News />} />
      <Route path="/traningpages" element={<Traningpages />} />
      <Route path="/traningids" element={<Traningsid />} />
    </Routes>
  );
};

export default Routing;
