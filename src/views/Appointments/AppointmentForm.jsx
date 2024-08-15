import { useState } from "react";
import { useSelector } from "react-redux";
import { validateForm } from "../../helpers/validateForm";
import axios from "axios";
import { getEnvVariables } from "../../helpers/getEnvVariables";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState({
    date: "",
    time: "",
  });

  const [success, setSuccess] = useState(false);
  const [isDateValid, setIsDateValid] = useState(true);

  const user = useSelector((state) => state.user.user);

  const envVars = getEnvVariables();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    validateAndUpdateErrors(name, value);
  };

  const validateAndUpdateErrors = (fieldName, value) => {
    const fieldError = validateForm(fieldName, value);

    setErrors({
      ...errors,
      [fieldName]: fieldError,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isFormValid = true;
    const newErrors = {};
    for (const field in formData) {
      if (!formData[field]) {
        newErrors[field] = `${field} is required.`;
        isFormValid = false;
      }
    }

    setErrors(newErrors);

    if (isFormValid) {
      try {
        const dataAppointment = { ...formData, userId: user.id };
        await axios.post(
          `${envVars.VITE_BACK_URL}/appointments/schedule`,
          dataAppointment,
        );
        setFormData({
          date: "",
          time: "",
        });
        setSuccess(true);
      } catch (error) {
        console.log(error);
        setIsDateValid(false);
      }
    }
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Schedule your appointment</h1>
      <form onSubmit={handleSubmit}>
        <label>Date</label>
        <input
          className={errors.date ? "error" : ""}
          type="date"
          value={formData.date}
          name="date"
          onChange={handleInputChange}
        />
        {errors.date && <p className="error-message">{errors.date}</p>}
        {!isDateValid && (
          <p className="error-message ">
            No se pueden programar turnos los fines de semana.
          </p>
        )}

        <label>Time</label>
        <input
          className={errors.time ? "error" : ""}
          type="time"
          value={formData.time}
          name="time"
          onChange={handleInputChange}
        />
        {errors.time && <p className="error-message">{errors.time}</p>}
        {!isDateValid && (
          <p className="error-message">
            El horario de atención es de 9:00 a 19:00
          </p>
        )}

        <button className="register-button">Send</button>
        {success && (
          <div className="success-message">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            Your appointment was successfully created!
          </div>
        )}
      </form>
    </div>
  );
};

export default AppointmentForm;
