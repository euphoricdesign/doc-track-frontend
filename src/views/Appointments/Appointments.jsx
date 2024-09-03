import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Appointment from "../../components/Appointment/Appointment";
import axios from "axios";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";

import "./Appointments.css";
import { setUserAppointments } from "../../redux/userSlice";
import { getEnvVariables } from "../../helpers/getEnvVariables";

const MySwal = withReactContent(Swal);

const Appointments = () => {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const myAppointments = useSelector((state) => state.user.userAppointments);

  const envVars = getEnvVariables();

  const getAppointments = async () => {
    const data = await axios.get(`${envVars.VITE_BACK_URL}/users/${user.id}`);
    const appointments = data.data.appointments;
    dispatch(setUserAppointments(appointments));
  };

  const cancelUser = async (id) => {
    //*Lógica para cancelar un appointment
    console.log(id);

    await axios.put(`${envVars.VITE_BACK_URL}/appointments/cancel/${id}`);
    await getAppointments();
  };

  // Función de confirmación para Sweet Alert 2
  const confirmCancel = (id) => {
    MySwal.fire({
      title: "¿Estas seguro de cancelar el turno?",
      text: "No vas a poder revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#60D394",
      cancelButtonColor: "#EE6055",
      confirmButtonText: "Si, deseo cancelar mi turno",
    }).then((result) => {
      if (result.isConfirmed) {
        cancelUser(id);
        Swal.fire("Cancelado!", "Your file has been deleted.", "success");
      }
    });
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return myAppointments.length ? (
    <div className="container">
      <h1>My appointments</h1>
      <div className="button-container">
        <Link to="/appointments/schedule">
          <button className="add-appointment">Add appointment</button>
        </Link>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Status </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myAppointments.map((appointment) => (
              <Appointment
                key={appointment.id}
                id={appointment.id}
                date={appointment.date}
                time={appointment.time}
                status={appointment.status}
                confirmCancel={confirmCancel}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <>
      <p className="no-turns-message">
        No appointments at the moment
        <button className="add-appointment">
          <Link to="/appointments/schedule">Add appointment</Link>
          <div className="arrow-wrapper">
            <div className="arrow"></div>
          </div>
        </button>
      </p>
    </>
  );
};

export default Appointments;
