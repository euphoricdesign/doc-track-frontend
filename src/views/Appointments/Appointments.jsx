import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";

import { setUserAppointments } from "../../redux/userSlice";
import { getEnvVariables } from "../../helpers/getEnvVariables";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineEditCalendar } from "react-icons/md";
import "./Appointments.css";

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
    await axios.put(`${envVars.VITE_BACK_URL}/appointments/cancel/${id}`);
    await getAppointments();
  };

  // Función de confirmación para Sweet Alert 2
  const confirmCancel = (id) => {
    MySwal.fire({
      title: "Are you sure you want to cancel the appointment?",
      text: "You cannot reverse this action",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4f6dcf",
      cancelButtonColor: "#EE6055",
      confirmButtonText: "Yes, I want to cancel my appointment",
    }).then((result) => {
      if (result.isConfirmed) {
        cancelUser(id);
        Swal.fire({
          title: "Canceled!",
          text: "Your appointment has been cancelled.",
          icon: "success",
          confirmButtonColor: "#4f6dcf", // Color del botón de confirmación en el segundo modal
        });  
      }
    });
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return myAppointments.length ? (
    <div className="container appointments-table">
      <h2>My Appointments</h2>
      <div className="flex justify-end">
        <button className="add-appointment">
          <Link to="/appointments/schedule">Add appointment</Link>
          <div className="arrow-wrapper">
            <div className="arrow"></div>
          </div>
        </button>
      </div>
       <div className="appointments-table-container">
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Médico</th>
            {/* <th>Notas</th> */}
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {myAppointments && myAppointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{new Date(appointment.date).toLocaleDateString()}</td>
              <td>{appointment.time}</td>
              <td>{appointment.doctor.name}</td>
              {/* <td>{appointment.notes}</td> */}
              <td>{appointment.status}</td>
              <td>
                <button className="action-btn" disabled onClick={() => handleEdit(appointment.id)}><MdOutlineEditCalendar className="text-[18px]" /></button>
                <button className="action-btn" onClick={() => confirmCancel(appointment.id)}><MdOutlineCancel className="text-[18px]" /></button>
              </td>
            </tr>
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
