import axios from "axios";
import ReactDOMServer from "react-dom/server"
import { useState } from "react";
import {Input } from './ui/input'
import {Button } from './ui/button'
import {Label } from './ui/label'
import { ToastContent } from "./ToastContent/ToastContent";

import register from '../assets/register.svg'
import { Link, useNavigate } from "react-router-dom";
import { getEnvVariables } from '../helpers/getEnvVariables'
import { validateForm } from '../helpers/validateForm'
import Toastify from "toastify-js"  

const NewRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);
  
  const navigate = useNavigate('/auth/login')
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

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      await axios.post(`${envVars.VITE_BACK_URL}/users/register`, formData);
      setFormData({
        name: "",
        email: "",
        username: "",
        password: "",
      });
      setSuccess(true);
      const myToast = Toastify({
        text: ReactDOMServer.renderToString(<ToastContent message={"Your account was successfully created"} />),
        className: "toastify",
        position: "left",
        gravity: "bottom",
        duration: 870, // Duración muy grande para simular permanencia en pantalla
        close: false,
        escapeMarkup: false
      })  

      myToast.showToast()  
      setTimeout(() => {
        navigate('/appointments')
      }, 1800)
    }
  };

  return (
    <div className='flex h-[100vh] w-[100vw]'>
       <div className='w-full bg-white py-[80px] px-[75px] flex-[2]'>
            <span className="text-[14px] text-[#8b85a8] font-[600]">REGISTER NOW</span>
            <h1 className="my-[12px]">Sign Up</h1>
            <p className="mb-[30px] text-[#8b85a8f0]">Already have an account? <Link to={"/auth/login"} className="text-[#4f6dcf]">Sign In.</Link></p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <Label className="text-[#8b85a8] font-[600]" htmlFor="email">Full Name</Label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="h-[45px]"
                    />
                    {errors.name && <p className="error-message">{errors.name}</p>}
                </div>
                <div className="mb-4">
                    <Label className="text-[#8b85a8] font-[600]" htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="h-[45px]"
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>
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
                <Button className="h-[45px] mt-[16px] w-full tracking-widest" type="submit">SIGN UP</Button>
                <p className="text-xs text-gray-400 mt-[30px] mb-[5px]">By clicking the Sign Up button, you therefore agre to the Privacy Policy.</p>
                <p className="text-xs text-gray-400">For more information, read about our privacy here.</p>
            </form>
       </div>

      <div className='h-full w-full px-[84px] py-[115px] bg-[#f3f9ff] rounded-[36px] flex-[3]'>
        <img className='w-[800px]' src={register} />
      </div>

    </div>
  );
};

export default NewRegister;
