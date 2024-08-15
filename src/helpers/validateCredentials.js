import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

import { getEnvVariables } from "./getEnvVariables";

export const validateCredential = async (credentials) => {
  const envVars = getEnvVariables();

  console.log(envVars);

  const dispatch = useDispatch();
  const response = await axios.post(
    `${envVars.VITE_BACK_URL}/users/login`,
    credentials,
  );
  if (response.statusText === "OK") {
    const user = response.data.user;
    console.log(user);
    dispatch(setUser(newUserData));
    return true;
  } else return false;
};
