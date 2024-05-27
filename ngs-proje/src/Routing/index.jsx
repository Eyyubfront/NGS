import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import Servicesection from "../pages/Servicesection/Servicesection"
import AboutUs from "../pages/AboutUs/AboutUs"
const Routing = () => {
    return (
        <>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicesection" element={<Servicesection />} />
                <Route path="/aboutus" element={<AboutUs />} />



            </Routes>

        </>
    )
}

export default Routing