import { Delete, Edit, List, Search } from "@mui/icons-material";
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
  Modal,
  Slide,
  Typography,
} from "@mui/material";
import img from "../../Asset/Rectangle 110798.png";
import React, { forwardRef, useState } from "react";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AdminReviewPartner() {
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
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <List className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p>Partners Reviews</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head">
          <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span>
          <button className="addbutton" onClick={handleOpen}>
            Add Partners Reviews
          </button>
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Name of the Partner</th>
                <th>Img</th>
                <th style={{ width: "250px" }}>Text </th>
                <th>Published</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Nemesis</td>

                <td>
                  <img
                    src={img}
                    alt="brand"
                    style={{ width1: "100px", height: "50px" }}
                  />
                </td>
                <td style={{ width: "250px" }}>
                  She had a beautiful gold necklace, one that glittered in the
                  light. It was a precious heirloom, handed down from her.
                </td>
                <td>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </td>
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
              Partner Review
            </Typography>
            <form className="modal_form">
              <span>
                <input type="text" placeholder="Name" />
              </span>
              <span>
              <textarea rows={10} placeholder="Review" style={{width:'100%',border:'none',outline:'none',paddingLeft:'10px',paddingTop:'10px'}}/>
              </span>
              {/* <span>
               
                <select>
                  <option>Select Brand</option>
                  <option>BlueStone</option>
                  <option>BlueStone</option>
                  <option>BlueStone</option>
                  <option>BlueStone</option>
                </select>
              </span> */}
              <p className="modal_form_para">Images</p>

              <input type="file" />
              <button className="modal_form_buttom">Add Partner Review</button>
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
              Partner Review
            </Typography>
            <form className="modal_form">
              <span>
                <input type="text" placeholder="Name" />
              </span>
              <span>
              <textarea rows={10} placeholder="Review" style={{width:'100%',border:'none',outline:'none',paddingLeft:'10px',paddingTop:'10px'}}/>
              </span>
              {/* <span>
               
                <select>
                  <option>Select Brand</option>
                  <option>BlueStone</option>
                  <option>BlueStone</option>
                  <option>BlueStone</option>
                  <option>BlueStone</option>
                </select>
              </span> */}
              <p className="modal_form_para">Images</p>

              <input type="file" />
              <button className="modal_form_buttom">Update Partner Review</button>
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

export default AdminReviewPartner;
