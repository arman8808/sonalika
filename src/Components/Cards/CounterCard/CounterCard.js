import React, { useEffect } from "react";
import "./CounterCard.css";
import img from "../../Assests/Image/Group 3656.png";
import { Link } from "react-router-dom";
import { useState } from "react";
function CounterCard() {
  const [days,setDays]=useState(0)
  const [hours,setHours]=useState(0)
  const [mins,setMins]=useState(0)
  const [sec,setSec]=useState(0)
  const deadline='December ,31,2023'
  const getTime=()=>{
    const time=Date.parse(deadline)-Date.now()
    setDays(Math.floor(time/(1000*60*60*24)))
    setHours(Math.floor(time/(1000*60*60)%24))
    setMins(Math.floor((time/1000/60)%60))
    setSec(Math.floor((time/1000)%60))
 
  }
  useEffect(()=>{
    setInterval(()=>{
      getTime()
    },1000)
  },[])
  return (
    <div className="countercard">
      <img src={img} alt="banner" />
      <span>
        <p className="countercard_para">DEALS OF THE WEEK</p>
        <h4>NAME OF THE Product </h4>
        <p className="countercard_para1">
          Fashion is about dressing according to what's fashionable. Style is
          more about being yourself. Design is a constant challenge to balance
          comfort with luxe...
        </p>
        <span className="countercard_timer">
          <p>{days}D</p>
          <p>-</p>
          <p>{hours}H</p>
          <p>-</p>
          <p>{mins}M</p>
          <p>-</p>
          <p>{sec}S</p>
        </span>
        <Link>Buy Now</Link>
      </span>
    </div>
  );
}

export default CounterCard;
