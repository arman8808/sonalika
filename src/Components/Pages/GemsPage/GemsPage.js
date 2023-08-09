import React from "react";
import "./GemsPage.css";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import { Link } from "react-router-dom";
import img from "../../Assests/Image/gemstone page _/Rectangle 366.png";
import img1 from "../../Assests/Image/gemstone page _/3d-render-emerald-red-crystal-isolated-white-background-gems-natural-nuggets-mysterious-accessories.png";
import img2 from "../../Assests/Image/gemstone page _/amber-crystal-isolated-golden-amber-pebble-white.png";
import img3 from "../../Assests/Image/gemstone page _/big-decorative-diamond.png";
import img4 from "../../Assests/Image/gemstone page _/diamond_purple2.png";
import img5 from "../../Assests/Image/gemstone page _/macro-amber-mineral-stone-with-spider-white-background.png";
import img6 from "../../Assests/Image/gemstone page _/macro-mineral-stone-cut-amethysts-white-background.png";
import img7 from "../../Assests/Image/gemstone page _/macro-stone-mineral-emeralds-white-background.png";
import GemsCard from "../../Cards/GemsCard/GemsCard";

function GemsPage() {
  const data = [
    {
      title: "Ruby is the July birthstone",
      shortdescription:
        "Ruby is the July birthstone, known for its vibrant red hue and stunning beauty. Believed to hold the power of passion and love..",
      image: img1,
      bgcolor:'#FFE4E5'
    },
    {
      title: "Ruby is the July birthstone",
      shortdescription:
        "Ruby is the July birthstone, known for its vibrant red hue and stunning beauty. Believed to hold the power of passion and love..",
      image: img1,
      bgcolor:'#F3FAFF'
    },
    {
      title: "Ruby is the July birthstone",
      shortdescription:
        "Ruby is the July birthstone, known for its vibrant red hue and stunning beauty. Believed to hold the power of passion and love..",
      image: img2,
      bgcolor:'#FFECD1'
    },
    {
      title: "Ruby is the July birthstone",
      shortdescription:
        "Ruby is the July birthstone, known for its vibrant red hue and stunning beauty. Believed to hold the power of passion and love..",
      image: img3,
     
    },
    {
      title: "Ruby is the July birthstone",
      shortdescription:
        "Ruby is the July birthstone, known for its vibrant red hue and stunning beauty. Believed to hold the power of passion and love..",
      image: img4,
      bgcolor:'#F9EEFF'
    },
    {
      title: "Ruby is the July birthstone",
      shortdescription:
        "Ruby is the July birthstone, known for its vibrant red hue and stunning beauty. Believed to hold the power of passion and love..",
      image: img5,
      bgcolor:'#FFE6D0'
    },
    {
      title: "Ruby is the July birthstone",
      shortdescription:
        "Ruby is the July birthstone, known for its vibrant red hue and stunning beauty. Believed to hold the power of passion and love..",
      image: img6,
      bgcolor:'#E7D0FF'
    },
     {
      title: "Ruby is the July birthstone",
      shortdescription:
        "Ruby is the July birthstone, known for its vibrant red hue and stunning beauty. Believed to hold the power of passion and love..",
      image: img7,
      bgcolor:'#C6FFF2'
    },
  ];
  return (
    <>
      <UpperNavBar />
      <MainNavBar />
      <div className="gemspage">
        <div className="gemspage_breadcrums">
          <Link>Home</Link> / <p>GemStone</p>
        </div>
        <div className="gemspage_banner">
          <img src={img} alt="" />
        </div>
        <div className="gemspage_heading">
          <h3>Gemstone</h3>
        </div>
        <div className="gemspage_cards">
          {data?.map((item) => (
            <GemsCard title={item.title} shortdescription={item.shortdescription} image={item.image} bgcolor={item.bgcolor}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default GemsPage;
