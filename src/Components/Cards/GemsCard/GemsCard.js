import React from "react";
import "./GemsCard.css";
import { Facebook, Twitter, WhatsApp } from "@mui/icons-material";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
function GemsCard({ title, shortdescription,image,discription,bgcolor }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 400,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
    outline: "0",
    borderRadius: "5px",
    height:'630px',
    overflowY:"scroll"
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="gemscard">
    <div className="gemscard_image" style={{ backgroundColor: `${bgcolor}` }}>
        <img src={image} alt="" />
      </div>
      <div className="gemscard_details">
        <p>{title}</p>
        <span>
          <p>
            Ruby is the July birthstone, known for its vibrant red hue and
            stunning beauty. Believed to hold the power of passion and love..
          </p>
        </span>
        <button onClick={handleOpen}>Read More</button>
        <span className="gemscard_details_span">
          <Facebook style={{color:'#1877F2',fontSize:'35px',cursor:'pointer'}}/>
          <WhatsApp style={{color:'#25D366' ,fontSize:'35px',cursor:'pointer'}}/>
          <Twitter style={{color:'#1DA1F2' ,fontSize:'35px',cursor:'pointer'}}/>
        </span>
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
          <Box sx={style}  className="gemstone_modal">
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Ruby is the July birthstone, known for its vibrant red hue and
              stunning beauty. Believed to hold the power of passion and love,
              it has captivated people for centuries.
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              This precious gemstone derives its name from the Latin word
              "ruber," meaning red, which perfectly describes its intense color.
              Throughout history, rubies have been cherished and revered by
              various cultures worldwide.
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              In ancient times, they were believed to possess magical
              properties, bringing good fortune, protection, and an abundance of
              success. Warriors wore rubies in battle, thinking they would grant
              them strength and invincibility. Not only are rubies visually
              striking, but they also hold deep symbolism. They represent love,
              desire, and energy, making them a popular choice for many special
              occasions. Ruby jewelry, such as rings, necklaces, and earrings,
              have become coveted pieces, often passed down through generations.
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              In ancient times, they were believed to possess magical
              properties, bringing good fortune, protection, and an abundance of
              success. Warriors wore rubies in battle, thinking they would grant
              them strength and invincibility. Not only are rubies visually
              striking, but they also hold deep symbolism. They represent love,
              desire, and energy, making them a popular choice for many special
              occasions. Ruby jewelry, such as rings, necklaces, and earrings,
              have become coveted pieces, often passed down through generations.
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2" style={{marginTop:'10px'}}>
              BENEFITS
            </Typography>
            <ul>
              <li>
                In recent times, rubies have gained popularity among gem
                collectors and enthusiasts for their rarity and distinct beauty.
                They continue to be sought after by many, including celebrities
                and royalty, who often showcase stunning ruby pieces during
              </li>{" "}
              <li>
                In recent times, rubies have gained popularity among gem
                collectors and enthusiasts for their rarity and distinct beauty.
                They continue to be sought after by many, including celebrities
                and royalty, who often showcase stunning ruby pieces during
              </li>
            </ul>
            <Typography id="transition-modal-title" variant="h6" component="h2" style={{marginTop:'10px'}}>
              PURPOSE
            </Typography>
            <ul style={{marginBottom:'20px'}}>
              <li>
                In recent times, rubies have gained popularity among gem
                collectors and enthusiasts for their rarity and distinct beauty.
                They continue to be sought after by many, including celebrities
                and royalty, who often showcase stunning ruby pieces during
              </li>{" "}
              <li>
                In recent times, rubies have gained popularity among gem
                collectors and enthusiasts for their rarity and distinct beauty.
                They continue to be sought after by many, including celebrities
                and royalty, who often showcase stunning ruby pieces during
              </li>
            </ul>
            <Link to='/singlecontactpage' className="gemscard_contact_button">Contact Us</Link>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default GemsCard;
