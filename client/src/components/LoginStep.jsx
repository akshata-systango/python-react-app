import React, { useState, useEffect } from "react";
import Input from "../Shared/InputField/index";
import Button from "../Shared/Button/index";
import { Link } from "react-router-dom";
const axios = require("axios");

const LoginStep = () => {
  const [users, setAllUser] = useState();
  const [loginInputs, setLoginInputs] = useState({
    userName: "",
    password: "",
  });

  console.log('users', users)

  useEffect(() => {
    axios.get("/get").then(function (response) {
      setAllUser(response.data);
      return response;
    });
  }, []);

  const loginInputHandler = () => {};
  return (
    <div className="form">
      <h1>Login</h1>

      <form>
        <label>UserName</label>
        <Input
          name={"UserName"}
          className={"uname"}
          type={"text"}
          placeholder={"Enter Username..."}
          onChange={(e) =>
            setLoginInputs({ ...loginInputs, userName: e.target.value })
          }
        />
        <label>Password</label>
        <Input
          name={"Password"}
          className={"Password"}
          type={"password"}
          placeholder={"Enter Password..."}
          onChange={(e) =>
            setLoginInputs({ ...loginInputs, password: e.target.value })
          }
        />
      </form>
      <Link to={"/dashboard"}>
        <Button
          className={"button"}
          type={"submit"}
          onclick={loginInputHandler}
        >
          Submit
        </Button>
      </Link>
    </div>
  );
};

export default LoginStep;