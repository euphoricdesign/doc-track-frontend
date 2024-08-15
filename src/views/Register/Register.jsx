import { useState } from "react";
import { validateForm } from "../../helpers/validateForm";
import axios from "axios";
import "./Register.css";
import { Link } from "react-router-dom";
import { getEnvVariables } from "../../helpers/getEnvVariables";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: 0,
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);

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
    const fieldError = validateForm(fieldName, value); //* Mensaje de error

    setErrors({
      ...errors,
      [fieldName]: fieldError,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //* Validar que todos los campos obligatorios estén llenos
    let isFormValid = true;
    const newErrors = {};
    for (const field in formData) {
      console.log(field);
      if (!formData[field]) {
        newErrors[field] = `${field} es requerido.`;
        isFormValid = false;
      }
    }

    setErrors(newErrors);

    if (isFormValid) {
      await axios.post(`${envVars.VITE_BACK_URL}/users/register`, formData);
      setFormData({
        name: "",
        email: "",
        birthdate: "",
        nDni: 0,
        username: "",
        password: "",
      });
      setSuccess(true);
    }
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          className={errors.name ? "error" : ""}
          type="text"
          value={formData.name}
          name="name"
          onChange={handleInputChange}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}

        <label>Email</label>
        <input
          className={errors.email ? "error" : ""}
          type="email"
          value={formData.email}
          name="email"
          onChange={handleInputChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <label>Birthdate</label>
        <input
          className={errors.birthdate ? "error" : ""}
          type="date"
          value={formData.birthdate}
          name="birthdate"
          onChange={handleInputChange}
        />
        {errors.birthdate && (
          <p className="error-message">{errors.birthdate}</p>
        )}

        <label>ID Card</label>
        <input
          className={errors.nDni ? "error" : ""}
          type="number"
          value={formData.nDni}
          name="nDni"
          onChange={handleInputChange}
        />
        {errors.nDni && <p className="error-message">{errors.nDni}</p>}

        <label>Username</label>
        <input
          className={errors.username ? "error" : ""}
          type="text"
          value={formData.username}
          name="username"
          onChange={handleInputChange}
        />
        {errors.username && <p className="error-message">{errors.username}</p>}

        <label>Password</label>
        <input
          className={errors.password ? "error" : ""}
          type="password"
          value={formData.password}
          name="password"
          onChange={handleInputChange}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}

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
            Your account was successfully created!
          </div>
        )}
      </form>
      <div className="signup-link">
        Already have an account? <Link to="/auth/login">Login here</Link>
      </div>
    </div>
  );
};

export default Register;
