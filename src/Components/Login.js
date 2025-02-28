import React from "react";
import { useParams } from "react-router-dom";

const Login = () => {
  const { name } = useParams();
  return <div>Login Component User Name is : {name} </div>;
};
export default Login;
