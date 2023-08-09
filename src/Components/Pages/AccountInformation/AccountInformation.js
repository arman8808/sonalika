import React from "react";
import "./AccountInformation.css";
import img from "../../Assests/Image/Ellipse 60.png";
function AccountInformation() {
  return (
    <div className="accountinformation">
      <div className="accountinformation_heading">
        <h3>Account information</h3>
      </div>
      <div className="accountinformation_details">
        <form>
          <div className="accountinformation_details_form">
            <div className="accountinformation_details_form_left">
              <span>
                <input type="text" placeholder="Full Name" />
              </span>
              <span>
                <input type="text" placeholder="Email" />
              </span>
              <span>
                <input type="text" placeholder="Mobile Number" />
              </span>
            </div>
            <div className="accountinformation_details_form_right">
              <div className="accountinformation_details_form_right_top">
                <img src={img} alt="profile " />
              </div>

              <input type="file" />
            </div>
          </div>
          <div className="accountinformation_details_button">
            <button>SAVE NOW</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountInformation;
