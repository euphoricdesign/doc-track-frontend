import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../views/Home/Home";
import Appointments from "../views/Appointments/Appointments";
import AppointmentForm from "../views/Appointments/AppointmentForm";
import Navbar from "../components/Navbar/Navbar";

export const AppointmentsRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointments/schedule" element={<AppointmentForm />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
