import React, { useState, useEffect } from "react";
import backButton from "../Assets/icons/backbutton.png";

import Input from "../Shared/InputField/index";
import Button from "../Shared/Button/index";
import { Link } from "react-router-dom";
const axios = require("axios");

const isEmpty = (value) => value.trim() === "";
const isSixChars = (value) => value.trim().length === 6;

const LoginStep = () => {
  const [users, setAllUser] = useState({
    isUsernameValid: "",
    isPasswordValid: "",
  });
  const [loginInputs, setLoginInputs] = useState({
    userName: "",
    password: "",
  });

  useEffect(() => {
    axios.get("/get").then(function (response) {
      setAllUser(response.data);
      return response;
    });
  }, []);

  const nevigationBackHandler = () => {
    // history.push("/login");
    console.log("lets see");
  };

  const loginInputHandler = () => {
    const validUsername = !isEmpty(loginInputs.userName);
    const validPassword = !isSixChars(loginInputs.password);
    setAllUser({ userName: validUsername, password: validPassword });
  };
  return (
    <div className="form">
      <div className="flex_container">
        <span>
          <Button className={"backIconButton"} onclick={nevigationBackHandler}>
            <img src={backButton} className="backIcon" />
          </Button>
        </span>
        <h1 className="heading">Login</h1>
      </div>

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
        {!users.isUsernameValid && <p>Please enter valid username</p>}
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
        {!users.isPasswordValid && <p>Please enter valid password</p>}
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
