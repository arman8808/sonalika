import React from "react";
import "./Inquiry.css";
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
  Modal,
  Rating,
  Slide,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Delete, Edit, List, Search } from "@mui/icons-material";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Inquiry() {
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
  const [reviewValue, setReviewValue] = useState(
    `She had a beautiful gold necklace, one that glittered in the light. It was a precious heirloom, handed down from her grandmother, a reminder of the strong and beautiful woman she'd never had the chance to meet. It was a special gift, one that would remain close to her heart and bring forth countless memories. She admired the intricate designs of the gold, a unique set of patterns that had been formed over time. The necklace was a connection to her past, her family ties, and her own identity. It was a part of who she was, and she knew it would be with her for many years to come.`
  );
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading ">
        <List className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p>Inquiry </p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head">
          <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span>
          {/* <button className="addbutton" onClick={handleOpen}>
        Add Categorie
      </button> */}
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Email/phone </th>
                <th style={{ width: "350px" }}>what user wants?</th>
                <th>Zip code </th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>nemesis</td>
                <td>
                  <p>@gmail.com</p>
                  <p>+91 123456789</p>
                </td>
                <td style={{ width: "350px" }}> Gold Earrings </td>
                <td><p>225006</p></td>

                <td><p>LuckNow</p></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
              Edit
            </Typography>

            <form className="modal_form">
              <span style={{ marginTop: "10px" }}>
                <textarea
                  type="text"
                  value={reviewValue}
                  placeholder="Type Your Reply Here"
                  style={{
                    width: "100%",
                    fontFamily: "unna",
                    fontSize: "18px",
                    lineHeight: "25px",
                    padding: "10px",
                    outline: "transparent",
                    border: "1px solid lightgrey",
                  }}
                  rows={10}
                  onChange={(e) => setReviewValue(e.target.value)}
                />
              </span>
              <p>Rating</p>
              <span className="modal_form_rating">
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </span>

              <button className="modal_form_buttom">Update Review</button>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Dialog
        open={open1}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose1}
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
          <Button onClick={handleClose1}>Disagree</Button>
          <Button onClick={handleClose1}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Inquiry;
