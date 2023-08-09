import React from "react";
import "./ProductPage.css";
import img from "../../Assests/Image/Group 36561.png";
import Filter from "../../Layout/Filter/Filter";
import img1 from "../../Assests/Image/image 51.png";
import img2 from "../../Assests/Image/image 52.png";
import img3 from "../../Assests/Image/image 53.png";
import img4 from "../../Assests/Image/image 54.png";
import img5 from "../../Assests/Image/Vector.png";
import img6 from "../../Assests/Image/Vector-1.png";
import FormatListBulleted from "@mui/icons-material/FormatListBulleted";
import GridView from "@mui/icons-material/GridView";
import GridOn from "@mui/icons-material/GridOn";
import ProductCard from "../../Cards/ProductCard/ProductCard";
import Footer from "../../Layout/Footer/Footer";
import CustomPagination from "../../Layout/CustomPagination/CustomPagination";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import { Add, KeyboardArrowDown } from "@mui/icons-material";
import { useState } from "react";
function ProductPage() {
  const [mobilefilter, setMobilefilter] = useState(false);
  const [mobileSortBy, setMobileSortBy] = useState(false);
  const mobileFilterHandle = () => {
    setMobilefilter(!mobilefilter);
    setMobileSortBy(false);
  };
  const mobileSortByHandle = () => {
    setMobilefilter(false);
    setMobileSortBy(!mobileSortBy);
  };
  return (
    <>
      <UpperNavBar />
      <MainNavBar />

      <div className="productpage">
        <div className="productpage_breadcrums">
          {/* <Link to='/'>Home</Link> / <p> other-page</p> / <p> inside-page</p> */}
        </div>
        <div
          className="productpage_banner"
          style={{ backgroundImage: `url("${img}")` }}
        >
          <p className="productpage_banner_heading">Nose rings</p>
          <p>Free Shipping on over ₹ 5000</p>
          <p>For the Terms of the campaign, see the description page.</p>
          <p className="productpage_banner_heading">See More Product</p>
        </div>
        <div className="productpage_main_section">
          <div className="productpage_main_section_left">
            <Filter />
          </div>
          <div className="productpage_main_section_right">
            <div className="productpage_main_section_right_top">
              <div className="productpage_main_section_right_top_left">
                <div className="productpage_main_section_right_top_left_top">
                  <span>
                    <img src={img1} alt="logo" />
                    <p>FEATURED</p>
                  </span>
                  <span>
                    <img src={img3} alt="logo" />
                    <p>TOP RATED</p>
                  </span>
                </div>
                <div className="productpage_main_section_right_top_left_bottom">
                  <span>
                    <img src={img2} alt="logo" />
                    <p>FEATURED</p>
                  </span>
                  <span>
                    <img src={img4} alt="logo" />
                    <p>FEATURED</p>
                  </span>
                </div>
              </div>
              <div className="productpage_main_section_right_top_right">
                <div>
                  <img src={img5} alt="icon" />
                  <span>
                    <p>GLOD</p>
                    <p>16% UP 20% down</p>
                  </span>
                </div>
                <div>
                  <img src={img6} alt="icon" />
                  <span>
                    <p>DIAMOND</p>
                    <p>16% UP 20% down</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="productpage_main_section_right_bottom">
              <div className="productpage_main_section_right_bottom_mobile">
                <div onClick={mobileFilterHandle}>
                  <span>
                    <p>Filter</p> <Add style={{ fontSize: "16px" }} />
                  </span>
                </div>
                <div onClick={mobileSortByHandle}>
                  <span>
                    <p>Sort by latest</p>{" "}
                    <KeyboardArrowDown style={{ fontSize: "16px" }} />
                  </span>
                </div>
              </div>
              {mobilefilter && (
                <span>
                  <Filter />
                </span>
              )}
               {mobileSortBy && (
               <div className="productpage_main_section_right_bottom_mobile_sortby">
               <div className="productpage_main_section_right_top_left">
                 <div className="productpage_main_section_right_top_left_top">
                   <span>
                     <img src={img1} alt="logo" />
                     <p>FEATURED</p>
                   </span>
                   <span>
                     <img src={img3} alt="logo" />
                     <p>TOP RATED</p>
                   </span>
                 </div>
                 <div className="productpage_main_section_right_top_left_bottom">
                   <span>
                     <img src={img2} alt="logo" />
                     <p>FEATURED</p>
                   </span>
                   <span>
                     <img src={img4} alt="logo" />
                     <p>FEATURED</p>
                   </span>
                 </div>
               </div>
              
             </div>
              )}
              <div className="productpage_main_section_right_bottom_filter">
                <p>Showing 1–12 of 20 results</p>
                <span>
                  <FormatListBulleted className="productpage_main_section_right_bottom_filter_icon" />
                  <GridView className="productpage_main_section_right_bottom_filter_icon" />
                  <GridOn className="productpage_main_section_right_bottom_filter_icon" />
                </span>
              </div>
              <div className="productpage_main_section_right_bottom_cards">
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
          </div>
        </div>
        <div className="pagination">
          <CustomPagination />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ProductPage;
