import React, { useState } from "react";
import "./SingleContactPage.css";
import LocationOn from "@mui/icons-material/LocationOn";
import Email from "@mui/icons-material/Email";
import LocalPhone from "@mui/icons-material/LocalPhone";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import { useForm } from "react-hook-form";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
function SingleContactPage() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
    borderRadius: "4px",
    outline: "0",
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    handleOpen();
  };
  return (
    <>
      <UpperNavBar />
      <MainNavBar />
      <div className="singlecontactpage">
        <div className="singlecontactpage_left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1886258.3912847412!2d88.390188!3d22.575422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02766568ce0a4b%3A0x927c9550d8661c6a!2sSonalia%20Jewellers!5e0!3m2!1sen!2sin!4v1688388888015!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            style={{ height: "550px" }}
            className="singlecontactpage_left_iframe"
            title="shop address"
          ></iframe>
        </div>
        <div className="singlecontactpage_right">
          <div className="singlecontactpage_right_top">
            <span>
              <LocationOn />
              <p>
                P187 C.I.T Road, Kankurgachi, VIP Market Shop no 07 & 09 Kolkata
                -700054 West Bengal.
              </p>
            </span>
            <span>
              <Email />
              <p>info@sonaliajewellers.com</p>
            </span>
            <span>
              <LocalPhone />
              <p>+91 98302 14013</p>
              <p>+913340064220</p>
            </span>
          </div>
          <div className="singlecontactpage_right_bottom">
            <form onSubmit={handleSubmit(onSubmit)}>
              <span>
                <input
                  type="text"
                  placeholder="Your name"
                  {...register("name", {
                    required: true,
                    validate: (value) => {
                      return !!value.trim();
                    },
                  })}
                />
              </span>
              {errors.name && (
                <p className="loginFormError">Please Enter Valid Name</p>
              )}
              <span>
                <input
                  type="text"
                  placeholder="Your E-mail"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
              </span>
              {errors.email && (
                <p className="loginFormError">Please Enter Valid Email</p>
              )}
              <span>
                <input
                  type="text"
                  placeholder="Your Mobile number"
                  {...register("mobile", {
                    required: true,
                    pattern: /^[0-9+-]+$/,
                    minLength: 10,
                    maxLength: 12,
                  })}
                />
              </span>
              {errors.mobile && (
                <p className="loginFormError">Please Enter Valid Number</p>
              )}
              <span>
                <textarea
                  placeholder="Message box (The users can type in their queries about the Product)"
                  rows={10}
                  {...register("message", {
                    required: true,
                    validate: (value) => {
                      return !!value.trim();
                    },
                  })}
                />
              </span>
              {errors.message && (
                <p className="loginFormError">Please Enter valid Message</p>
              )}
              <button>Send</button>
            </form>
          </div>
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
              Thanks For Sending Us Message
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
             Our Team Will Contact you Soon!
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default SingleContactPage;
