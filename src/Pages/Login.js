import React from "react";
import "../style.scss"
import Add from "../img/proj4.jpg"
const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat with friends</span>
        <span className="title">Sign In</span>
        <form>
          <input type="email" placeholder="display eamil" />
          <input type="password" placeholder="display password" />
          <button>Sign in</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
