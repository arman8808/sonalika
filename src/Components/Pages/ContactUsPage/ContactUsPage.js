import React, { useState } from "react";
import "./ContactUsPage.css";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import img from "../../Assests/Image/Group 36561.png";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
function ContactUsPage() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #fff',
        boxShadow: 24,
        p: 4,
        outline:'0',
        borderRadius:'5px'
        
      };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        handleOpen()
    }
  return (
    <>
      <UpperNavBar />
    <MainNavBar />
    <div className="contactuspage">
      <div className="contactuspage_banner">
        <img src={img} alt="banner" />
      </div>
      <div className="contactuspage_heading">
        <h3>Gold Jewellery Earrings</h3>
      </div>
      <div className="contactuspage_form">
        <form onSubmit={handleSubmit}>
          <div>
            <span>
              <input type="text" placeholder="Name *" />
            </span>
            <span>
              <input type="text" placeholder="Email * " />
            </span>
          </div>
          <div>
            <span>
              <input type="text" placeholder="Phone mobile *" />
            </span>
            <span>
              <input type="text" placeholder="I want  * " />
            </span>
          </div>
          <div>
            <span>
              <input type="text" placeholder="City  *" />
            </span>
            <span>
              <input type="text" placeholder="Zip code  * " />
            </span>
          </div>
          <div>
            <textarea
              className="contactuspage_textarea"
              placeholder="Description"
            />
          </div>
          <div className="contactuspage_form_div">
            <button >Send</button>
          </div>
        </form>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='modal_box'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Thanks You!
          </Typography>
          <Typography id="modal-modal-description" variant="p" sx={{ mt: 2 }}>
          Thank you for submitting our team's content. We truly appreciate it and we will be in touch with you soon to confirm receipt. We hope to work with you again in the future and promise to provide a quality content output.
          </Typography>
          <Link to='/' className="modal_button"> Continue Shopping</Link>
        </Box>
      </Modal>
    </div>
    
    </>
  
  );
}

export default ContactUsPage;
