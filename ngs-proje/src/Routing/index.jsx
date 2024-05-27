import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import Servicesection from "../pages/Servicesection/Servicesection"
import AboutUs from "../pages/AboutUs/AboutUs"
import Contact from "../pages/Contact/Contact"
const Routing = () => {
    return (
        <>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicesection" element={<Servicesection />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />



            </Routes>

        </>
    )
}

export default Routing