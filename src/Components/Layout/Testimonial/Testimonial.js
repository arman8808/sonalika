import React from "react";
import "./Testimonial.css";
import TestimonialPartnerCard from "../../Cards/TestimonialPartnerCard/TestimonialPartnerCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
function Testimonial() {
  return (
    <div className="testimonial_section">
      <div className="testimonial_section_heading">
        <h3>What Our Partners say about us</h3>
      </div>
      <div className="testimonial_slider">
        <Swiper
          // install Swiper modules
          modules={[ Pagination,Autoplay]}
          centeredSlides={true}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          
          }}
        >
          <SwiperSlide>
            <TestimonialPartnerCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialPartnerCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialPartnerCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialPartnerCard />
          </SwiperSlide> <SwiperSlide>
            <TestimonialPartnerCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
