import axios from "axios";
import { useEffect, useState } from "react";
import {Input } from './ui/input'
import {Button } from './ui/button'
import {Label } from './ui/label'

import login from '../assets/login.svg'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEnvVariables } from "../helpers/getEnvVariables";
import { validateForm } from '../helpers/validateForm'
import {
  loadUserFromLocalStorage,
  saveUserToLocalStorage,
} from "../helpers/localStorage";

import { setUser, setAuthenticated  } from "../redux/userSlice";

const NewLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  console.log(formData)

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const envVars = getEnvVariables();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    validateAndUpdateErrors(name, value)
  };

  const validateAndUpdateErrors = (fieldName, value) => {
    const fieldError = validateForm(fieldName, value); //* Mensaje de error

    setErrors({
      ...errors,
      [fieldName]: fieldError,
    });
  };

  const validateCredential = async (credentials) => {
    try {
      const response = await axios.post(
        `${envVars.VITE_BACK_URL}/users/login`,
        credentials
      );
  
      if (response.status === 200) {
        const user = response.data.user;
        console.log(user);
        dispatch(setUser(user));
        dispatch(setAuthenticated());
        saveUserToLocalStorage(user);
        navigate("/");
        return true;
      } 
      return false; // Cubrir el caso de una respuesta no 200 pero sin error en Axios.
    } catch (error) {
      if (error.response) {
        // El servidor respondió con un código de estado que cae fuera del rango de 2xx
        console.error("Respuesta de error del servidor:", error.response.data);
        console.error("Código de estado:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        // La solicitud se hizo pero no se recibió respuesta
        console.error("No se recibió respuesta del servidor:", error.request);
      } else {
        // Algo pasó al configurar la solicitud que disparó un error
        console.error("Error al configurar la solicitud:", error.message);
      }
      return false;
    }
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
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
        const loginSuccess = await validateCredential({
          username: formData.username,
          password: formData.password,
        });
  
        if (!loginSuccess) {
          alert("Credenciales inválidas o error en el servidor.");
        }
      } else {
        alert("Todos los campos son obligatorios");
      }
    } catch (err) {
      console.error("Ocurrió un error al iniciar sesión:", err);
      alert("Ocurrió un error inesperado al iniciar sesión.");
    }
  };
  

  useEffect(() => {
    const user = loadUserFromLocalStorage();
    if (user) {
      dispatch(setUser(user));
      dispatch(setAuthenticated());
    }
  }, [dispatch]);

  return (
    <div className='flex h-[100vh] w-[100vw]'>

      <div className='h-full w-[600] px-[84px] py-[140px] bg-[#f3f9ff] rounded-[36px] flex-[3] flex justify-center'>
        <img className='w-[800px]' src={login} />
      </div>

       <div className='w-full bg-white py-[165px] px-[75px] flex-[2]'>
            <span className="text-[14px] text-[#8b85a8] font-[600]">START YOUR JOURNEY</span>
            <h1 className="my-[12px]">Sign In</h1>
            <p className="mb-[30px] text-[#8b85a8f0]">Don't have an account? <Link to={"/auth/register"} className="text-[#4f6dcf]">Sign Up.</Link></p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <Label className="text-[#8b85a8] font-[600]" htmlFor="email">Username</Label>
                    <Input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter your username"
                        className="h-[45px]"
                    />
                    {errors.username && <p className="error-message">{errors.username}</p>}
                </div>
                <div className="mb-4">
                    <Label className="text-[#8b85a8] font-[600]" htmlFor="password">Password</Label>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="h-[45px]"
                    />
                     {errors.password && <p className="error-message">{errors.password}</p>}
                </div>
                <Button className="h-[45px] mt-[16px] w-full tracking-widest" type="submit">SIGN IN</Button>
                <p className="text-xs text-gray-400 mt-[30px] mb-[5px]">By clicking the Sign Up button, you therefore agre to the Privacy Policy.</p>
                <p className="text-xs text-gray-400">For more information, read about our privacy here.</p>
            </form>
       </div>

    

    </div>
  );
};

export default NewLogin;
