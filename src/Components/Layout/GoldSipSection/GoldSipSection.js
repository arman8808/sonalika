import React from "react";
import "./GoldSipSection.css";
import img from "../../Assests/Image/gold Sip/Frame.png";
import { useNavigate } from "react-router-dom";
function GoldSipSection() {
  const history=useNavigate()
  return (
    <div className="goldsipsection">
      <div className="goldsipsection_left">
        <img src={img} alt="gold sip" />
      </div>
      <div className="goldsipsection_right">
        <h3>A special Gold SIP for life!</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
          massa in enim luctus. Rutrum arcu.
        </p>
        <button onClick={()=>history('/sipplans')}>Get Now</button>
        <div>
          <span>
            <strong>2943</strong>
            <p> Gold SIP</p>
          </span> 
          <span>
            <strong>$1M+</strong>
            <p> Transaction Completed</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default GoldSipSection;
