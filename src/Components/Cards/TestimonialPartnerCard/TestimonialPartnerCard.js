import React from "react";
import "./TestimonialPartnerCard.css";
import img from "../../Assests/Image/Group 3654.png";
import img1 from "../../Assests/Image/Ellipse 16.png";
import img2 from "../../Assests/Image/clarity_block-quote-line.png";
function TestimonialPartnerCard() {
  return (
    <div
      className="testimonialpartnercard"
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className="testimonial_img">
        <img src={img1} alt="testimonial_img" />
      </div>
      <div className="testimonial_heading">
        <h3>Hannah Schmitt</h3>
        <p>Lead designer</p>
      </div>
      <div className="testimonial_discription">
        <img src={img2} alt="inverted comma" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
          mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
          nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
          felis id augue sit cursus pellentesque enim{" "}
        </p>
      </div>
    </div>
  );
}

export default TestimonialPartnerCard;
