import React from "react";
import "./Footer.css";
import img from "../../Assests/Image/image 48.png";
import img1 from "../../Assests/Image/file (1) 1.png";
import img2 from "../../Assests/Image/file 1.png";
import img3 from "../../Assests/Image/fulllogo.png";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
function Footer() {
  const history=useNavigate()
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footer_top_first">
          <h3>Address</h3>
          <p>
            The address of the source language is given, and we can use this
            address to pull data from the source language and render it in the
            output language.
          </p>
        </div>
        <div className="footer_top_second">
          <h3>Product</h3>
          <p>Gold Jewellery Earrings</p>
          <p>Astrology (Gemstone)</p>
          <p>Careers</p>
          <p>Other’s</p>
        </div>
        <div className="footer_top_third">
          <h3>Product</h3>
          <p>Gold Jewellery Earrings</p>
          <p>Astrology (Gemstone)</p>
          <p>Careers</p>
          <p>Other’s</p>
        </div>
        <div className="footer_top_fourth">
          <h3>Product</h3>
          <p>Gold Jewellery Earrings</p>
          <p>Astrology (Gemstone)</p>
          <p>Careers</p>
          <p>Other’s</p>
        </div>
        <div className="footer_top_five">
          <div className="footer_top_five_top">
            <img src={img} alt="logo" />
            <span>
              <p>Some text here about app</p>
              <p>Some text here about app</p>
            </span>
          </div>
          <div className="footer_top_five_bottom">
            <img src={img1} alt="mobile app logo" />
            <img src={img2} alt="mobile app logo" />
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <img src={img3} alt="logo"/>
        <span>
           <p onClick={()=>history('/termandcondition')}>Terms & conditions</p>
          <p onClick={()=>history('/privicypolicy')}>Privacy Policy</p>
        </span>
        <span>
          <Facebook className="footer_bottom_icon"/>
          <WhatsApp className="footer_bottom_icon"/>
          <Instagram className="footer_bottom_icon"/>
        </span>
      </div>
    </div>
  );
}

export default Footer;
