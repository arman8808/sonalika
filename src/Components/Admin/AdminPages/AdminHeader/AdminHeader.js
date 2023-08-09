import React from "react";
import "./AdminHeader.css";
import img from "../../Asset/Rectangle 110798.png";
import { Computer, Edit } from "@mui/icons-material";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import { useState } from "react";
function AdminHeader() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
    outline: "0",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="adminorderpage ">
      <div className="adminorderpage_heading adminabout">
        <Computer className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p> Website header </p>
      </div>
      <div className="adminorderpage_table adminabout">
        <form className="modal_form">
          <p className="modal_form_para">Topbar Information</p>
          <span>
            <input type="text" placeholder="Gmail @gmail.com" />
          </span>
          <span>
            <input type="text" placeholder="+91 123456789" />
          </span>
          <p className="modal_form_para">Navbar Information</p>
          <p className="modal_form_para">Navbar Logo</p>
          <input type="file" />
        

          <button className="modal_form_buttom">Update NavBar</button>
        </form>
      </div>
  
             
     
    </div>
  );
}

export default AdminHeader;
