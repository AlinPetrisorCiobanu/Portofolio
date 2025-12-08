import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";

const App_routes = () => {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />
                {/* <Route path="/dash" element={<Dashboard />} />
                <Route path="*" element={<Not_found />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App_routes;