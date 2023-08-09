import React from "react";
import "./HomeBanner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";
import img from "../../Assests/Image/image 46-1.png";
import img1 from "../../Assests/Image/image 46-2.png";
import img2 from "../../Assests/Image/image 46.png";
import img3 from "../../Assests/Image/image 56.png";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
// import Swiper styles
import "swiper/css/effect-fade";
import "swiper/css";
function HomeBanner({ data }) {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        effect={"fade"}
        modules={[Navigation, EffectFade,Autoplay]}
        navigation
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data?.map((item) => (
          <SwiperSlide>
            <div
              className="homebanner_slider"
              style={{ backgroundImage: `url("${item.img}")` }}
            >
              <div className="homebanner_slider_contant">
                <h3>{item ? item.title : "New Modern Collection"}</h3>
                <p>
                  {item
                    ? item.paragraph
                    : ` Elegance isn't solely defined by what you wear. It's how you
                  carry yourself, how you speak, what you read.`}
                </p>
                <a href="#">See More</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeBanner;
