import React from "react";
// import "./FeaturedDeals.css";
import img from "../../Assests/Image/image 14.png";
import ProductCard from "../../Cards/ProductCard/ProductCard";
import img1 from "../../Assests/Image/image 15.png";
import { ShoppingBag } from "@mui/icons-material";
import BlogCard from "../../Cards/BlogCard/BlogCard";
function FeaturedDeals() {
  return (
    <div className="featuredDeals">
      <div className="featuredDeals_heading">
        <h3>Blog</h3>
      </div>
      <div className="featuredDeals_bottom">
        <div className="featuredDeals_bottom_left">
          <img src={img} alt="side banner" />
          <span>
            <p className="span_first">Nose Earrings </p>
            <p className="span_second">25 Jun - 30 Jun </p>
            <p className="span_third">See More Products</p>
          </span>
        </div>
        <div className="featuredDeals_bottom_right">
            <BlogCard marginRight={'20px'}/>
            <BlogCard marginRight={'20px'}/>
            <BlogCard marginRight={'20px'}/>
            <BlogCard marginRight={'20px'}/>
            <BlogCard marginRight={'20px'}/>
            <BlogCard marginRight={'20px'}/>
          
        </div>
      </div>
    </div>
  );
}

export default FeaturedDeals;
