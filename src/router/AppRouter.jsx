import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";

import HomePage from "../pages/home"
import ReservasPage from "../pages/reservas"

const AppRouter = () => {
    return  (
        <>
          <Router>
            <NavBar />
            <div className="Container">
                <Routes path="/" element={<HomePage />} />
                <Routes path="/reservas" element={<ReservasPage />} />                
            </div>
          </Router>
        </>
    )
}

export default AppRouter;