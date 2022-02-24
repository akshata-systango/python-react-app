import React from "react";
import { Link } from "react-router-dom";
import Button from "../Shared/Button/index";
import './style.css';

const WelcomeStep = () => {
  return (
    <div className="registerPage">
      <h1>Welcome to the demo</h1>
      <div className="buttons">
        <Link to={"/register"}><Button className='btn register'><span>Register</span></Button></Link>
        <Link to={"/login"}><Button className='btn login'><span>Login</span></Button></Link>
      </div>
    </div>
  );
};

export default WelcomeStep;
<h1>Welcome to the demo</h1>;
