
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Servicesection from "../pages/Servicesection/Servicesection";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import Blogs from "../pages/Blogs/Blogs";

import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import Servicesection from "../pages/Servicesection/Servicesection"
import AboutUs from "../pages/AboutUs/AboutUs"
import Contact from "../pages/Contact/Contact"
import Traningpages from "../pages/Traningpages/Traningpages"
import Traningsid from "../pages/Traningsid/Traningsid"

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicesection" element={<Servicesection />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  );
};

export default Routing;
