import React from "react";
import "./Coupans.css";
import img from "../../Asset/Rectangle 110798.png";
import { forwardRef } from "react";
import {
  Backdrop,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  MenuItem,
  Modal,
  Select,
  Slide,
  Typography,
} from "@mui/material";
import { Delete, Edit, LocalActivity, Search } from "@mui/icons-material";
import { useState } from "react";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Coupans() {
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
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <LocalActivity
          className="adminsidebar_icon"
          style={{ fontSize: "35px" }}
        />
        <p>All Coupan's</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head">
          <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span>
          <button className="addbutton" onClick={handleOpen}>
            Add New Coupans
          </button>
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/L</th>
                <th style={{ width: "250px" }}>Code</th>
                <th>Discount Amount</th>
                <th>Start Date</th>
                <th>End date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td style={{ width: "250px" }}>GST10006</td>
                <td>10 (percent)</td>
                <td>14-03-2023</td>
                <td>30-04-2025</td>
                <td>
                  <Edit
                    style={{
                      color: "#6E798C",
                      marginLeft: "5px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleOpen1}
                  />
                  <Delete
                    style={{
                      color: "#6E798C",
                      marginLeft: "5px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleClickOpen}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="adminorderpage_pagination"></div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Coupan Info
            </Typography>
            <form className="modal_form">
              <span>
                <input type="text" placeholder="Coupon Code" />
              </span>
              <span>
                <input type="text" placeholder="Discount Amount" />
              </span>
              <span>
                <input type="text" placeholder="Percent or Fixed" />
              </span>
              <p className="modal_form_para">Start Date</p>
              <span>
                <input type="date" />
              </span>
              <p className="modal_form_para">End Date</p>
              <span>
                <input type="date" />
              </span>
              <p className="modal_form_para">Select Categories</p>
              <p className="modal_form_para">Select Categories</p>
              <span>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  style={{ width: "100%" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </span>

              <button className="modal_form_buttom">Add Coupan</button>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open1}
        onClose={handleClose1}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open1}>
          <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
              Coupan Info
            </Typography>
            <form className="modal_form">
              <span>
                <input type="text" placeholder="Coupon Code" />
              </span>
              <span>
                <input type="text" placeholder="Discount Amount" />
              </span>
              <span>
                <input type="text" placeholder="Percent or Fixed" />
              </span>
              <p className="modal_form_para">Start Date</p>
              <span>
                <input type="date" />
              </span>
              <p className="modal_form_para">End Date</p>
              <span>
                <input type="date" />
              </span>
              <p className="modal_form_para">Select Categories</p>
              <p className="modal_form_para">Select Categories</p>
              <span>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  style={{ width: "100%" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </span>

              <button className="modal_form_buttom">Update Coupan</button>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Dialog
        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose2}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Disagree</Button>
          <Button onClick={handleClose2}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Coupans;
