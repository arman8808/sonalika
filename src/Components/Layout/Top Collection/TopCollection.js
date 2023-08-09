import React from "react";
import "./TopCollection.css";
import img from "../../Assests/Image/image 21.png";
import img1 from "../../Assests/Image/image 22.png";
import img2 from "../../Assests/Image/image 23.png";
import img3 from "../../Assests/Image/image 24.png";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function TopCollection() {
  return (
    <div className="topcollection">
      <div className="topcollection_heading">
        <h3>TOP COLLECTION</h3>
      </div>
      <div className="topcollection_slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation]}
          navigation
          autoplay={Autoplay}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className="topcollection_slider_slider" style={{backgroundImage:`url("${img2}")`}}>
              <a href="#">View More </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="topcollection_slider_slider" style={{backgroundImage:`url("${img}")`}}>
              <a href="#">View More </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="topcollection_slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation]}
          navigation
          autoplay={Autoplay}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className="topcollection_slider_slider" style={{backgroundImage:`url("${img}")`}}>
              <a href="#">View More </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="topcollection_slider_slider" style={{backgroundImage:`url("${img1}")`}}>
              <a href="#">View More </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="topcollection_slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation]}
          navigation
          autoplay={Autoplay}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className="topcollection_slider_slider" style={{backgroundImage:`url("${img3}")`}}>
              <a href="#">View More </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="topcollection_slider_slider" style={{backgroundImage:`url("${img2}")`}}>
              <a href="#">View More </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="topcollection_slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation]}
          navigation
          autoplay={Autoplay}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className="topcollection_slider_slider" style={{backgroundImage:`url("${img1}")`}}>
              <a href="#">View More </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="topcollection_slider_slider" style={{backgroundImage:`url("${img}")`}}>
              <a href="#">View More </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default TopCollection;
