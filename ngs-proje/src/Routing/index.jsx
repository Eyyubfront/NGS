import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import Servicesection from "../pages/Servicesection/Servicesection"
const Routing = () => {
    return (
        <>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicesection" element={<Servicesection />} />
                



            </Routes>

        </>
    )
}

export default Routing