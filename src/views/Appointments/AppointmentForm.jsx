import { validateForm } from "../../helpers/validateForm";
import AppointmentBooking from "../../components/AppointmentScheduler/AppointmentScheduler";

const AppointmentForm = () => {
  return (
    <div className="container">
      <h1 className="mb-[40px]" style={{ textAlign: "center" }}>
        Make an Appointment
      </h1>
      <AppointmentBooking />
    </div>
  );
};

export default AppointmentForm;
