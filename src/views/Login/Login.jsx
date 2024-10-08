import { useEffect, useState } from "react";
import { validateForm } from "../../helpers/validateForm";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import "./Login.css";
import { setAuthenticated, setUser } from "../../redux/userSlice";
import {
  loadUserFromLocalStorage,
  saveUserToLocalStorage,
} from "../../helpers/localStorage";
import { getEnvVariables } from "../../helpers/getEnvVariables";
import NewLogin from "../../components/NewLogin";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

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

  const validateCredential = async (credentials) => {
    const response = await axios.post(
      `${envVars.VITE_BACK_URL}/users/login`,
      credentials,
    );

    if (response.status === 200) {
      const user = response.data.user;
      dispatch(setUser(user));
      dispatch(setAuthenticated());
      saveUserToLocalStorage(user);
      navigate("/");
      return true;
    } else return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //* Validar que todos los campos obligatorios estén llenos
      let isFormValid = true;
      const newErrors = {};
      for (const field in formData) {
        if (!formData[field]) {
          newErrors[field] = `${field} es requerido.`;
          isFormValid = false;
        }
      }

      setErrors(newErrors);

      if (isFormValid) {
        await validateCredential({
          username: formData.username,
          password: formData.password,
        });
      } else {
        alert("Todos los campos son obligatorios");
      }
    } catch (err) {
      console.log("Ocurrió un error al iniciar sesión");
    }
  };

  useEffect(() => {
    const user = loadUserFromLocalStorage();
    if (user) {
      dispatch(setUser(user));
      dispatch(setAuthenticated());
    }
  }, [dispatch]);

  return <NewLogin />
};

export default Login;
