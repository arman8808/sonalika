import React from "react";
import "./FeaturedDeals.css";
import img from "../../Assests/Image/image 14.png";
import ProductCard from "../../Cards/ProductCard/ProductCard";
import img1 from "../../Assests/Image/image 15.png";
import { ShoppingBag } from "@mui/icons-material";
function FeaturedDeals() {
  return (
    <div className="featuredDeals">
      <div className="featuredDeals_heading">
        <h3>Featured Deals</h3>
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
          <span>
            <ProductCard />
          </span>
          <span>
            <ProductCard />
          </span>
          <span>
            <ProductCard />
          </span>
          <span>
            <ProductCard />
          </span>
          <span>
            <ProductCard />
          </span>
          <span>
            <ProductCard />
          </span>
        </div>
      </div>
      <div className="featuredDeals_ads">
        <div className="featuredDeals_ads_first">
          <p>Super discount for your first purchase</p>
          <span>15@F!FG</span>
          <p>Use discount code in checkout page.</p>
        </div>
        <div className="featuredDeals_ads_second">
          <img src={img1} alt="banner" />
          <span>
            <p>Beaded double necklace</p>
            <p>12,000</p>
          </span>
          <ShoppingBag />
        </div>
      </div>
    </div>
  );
}

export default FeaturedDeals;
