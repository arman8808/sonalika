import React from "react";
import "./AdminLogin.css";
import logo from "../Asset/500 x 500 new new 1.jpg";
import logo1 from "../Asset/Group 3657.png";
import { Email, Lock } from "@mui/icons-material";
function AdminLogin({ setLogin }) {
  const loginHandle = (e) => {
    e.preventDefault();
    setLogin(true)
  };
  return (
    <div className="adminlogin">
      <div className="adminlogin_left">
        <div className="adminlogin_left_header">
          <img src={logo} alt="logo" />
        </div>
        <img src={logo1} alt="banner" />
      </div>
      <div className="adminlogin_right">
        <h3>Welcome</h3>
        <p>
          To keep connnected with us please login with your personal information
          by email address and password
        </p>
        <form>
          <span>
            <Email style={{ color: "lightgrey" }} />
            <input type="text" placeholder="Email Address" />
          </span>
          <span>
            <Lock style={{ color: "lightgrey" }} />
            <input type="text" placeholder="Password" />
          </span>
          <p className="adminlogin_right_forget">Forget Password</p>
          <button onClick={loginHandle}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
