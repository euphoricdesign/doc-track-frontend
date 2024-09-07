import { useState } from "react";
import { validateForm } from "../../helpers/validateForm";
import axios from "axios";
import "./Register.css";
import { Link } from "react-router-dom";
import { getEnvVariables } from "../../helpers/getEnvVariables";
import NewRegister from "../../components/NewRegister";

const Register = () => {

  return <NewRegister />
};

export default Register;
