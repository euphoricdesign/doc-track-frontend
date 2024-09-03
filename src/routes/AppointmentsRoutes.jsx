import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../views/Home/Home";
import Appointments from "../views/Appointments/Appointments";
import AppointmentForm from "../views/Appointments/AppointmentForm";
import Navbar from "../components/Navbar/Navbar";
import DoctorList from "../views/DoctorList/DoctorList";

export const AppointmentsRoutes = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors/info" element={<DoctorList />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/appointments/schedule" element={<AppointmentForm />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};
