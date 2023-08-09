import React from "react";
import "./OurTeamCard.css";
import img from "../../Assests/Image/man-1 2.png";
function OurTeamCard() {
  return (
    <div className="ourteamcard">
      <div className="ourteamcard_image">
        <img src={img} alt="team members" />
      </div>
      <div className="ourteamcard_details">
        <span>
          <p>Gold</p>
          <p>DIAMOND</p>
        </span>
        <h4>Name of EMPLOYEE</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit
          nibh et nisl, pellentesque scelerisque faucibus facilisis at. Placerat
          morbi sem viverra diam lectus odio orci...
        </p>
      </div>
    </div>
  );
}

export default OurTeamCard;
