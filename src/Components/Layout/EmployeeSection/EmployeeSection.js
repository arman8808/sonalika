import React from "react";
import "./EmployeeSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import OurTeamCard from "../../Cards/OurTeamCard/OurTeamCard";
function EmployeeSection() {
  return (
    <div className="employeesection">
      <Swiper
        // install Swiper modules
        modules={[Autoplay]}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.50': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          '@1.00': {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        
        }}
        className="allpromises_icons1_swiper"
      >
        <SwiperSlide>
          <OurTeamCard />
        </SwiperSlide>
        <SwiperSlide>
          <OurTeamCard />
        </SwiperSlide>
        <SwiperSlide>
          <OurTeamCard />
        </SwiperSlide> 
        <SwiperSlide>
          <OurTeamCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default EmployeeSection;
