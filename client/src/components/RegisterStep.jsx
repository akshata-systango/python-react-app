import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Shared/Button/index";
import Input from "../Shared/InputField/index";
const axios = require("axios");

const RegisterStep = () => {
  const [userInputs, setUserInputs] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const userInputHandler = () => {
    axios
      .post("/add", {
        userName: userInputs.userName,
        password: userInputs.password,
        confirm_password: userInputs.confirmPassword,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="form">
      <h1>Register</h1>
      <form className="registerForm">
        <label>UserName</label>
        <Input
          name={"UserName"}
          className={"uname"}
          type={"text"}
          placeholder={"Enter Username..."}
          onChange={(e) =>
            setUserInputs({ ...userInputs, userName: e.target.value })
          }
        />
        <label>Password</label>
        <Input
          name={"Password"}
          className={"Password"}
          type={"password"}
          placeholder={"Enter Password..."}
          onChange={(e) =>
            setUserInputs({ ...userInputs, password: e.target.value })
          }
        />
        <label>Renter-Password</label>
        <Input
          name={"Renter-Password"}
          className={"Renter-Password"}
          type={"password"}
          placeholder={"Re-enter Username..."}
          onChange={(e) =>
            setUserInputs({ ...userInputs, confirmPassword: e.target.value })
          }
        />
      </form>
      <Button className={"button"} type={"submit"} onclick={userInputHandler} disabled={disabled}>
        Submit
      </Button>
      <p>
        Already a user <Link to={"/login"}>Login</Link>
      </p>
    </div>
  );
};

export default RegisterStep;
