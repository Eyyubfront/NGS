import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Servicesection from "../pages/Servicesection/Servicesection";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import Blogs from "../pages/Blogs/Blogs";
import News from "../pages/News/News";
// import SubNews from "../pages/SubNews/SubNews";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicesection" element={<Servicesection />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
};

export default Routing;
