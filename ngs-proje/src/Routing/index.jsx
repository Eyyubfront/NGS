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
import Servicesubinfo from '../pages/Servicesubinfo/Servicesubinfo';
import Blog from '../pages/Blog/Blog';
import SubNews from '../pages/SubNews/SubNews';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicesection" element={<Servicesection />} />
      <Route path="/servicesection/:id" element={<Servicesub />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path='/blog' element={<Blog/>}/>
      <Route path="/news" element={<News />} />
      <Route path="/subNews" element={<SubNews />} />
      <Route path="/traningpages" element={<Traningpages />} />
      <Route path="/traningids" element={<Traningsid />} />
      <Route path="/servicessub/:id" element={<Servicesubinfo />} />
    </Routes>
  );
};

export default Routing;