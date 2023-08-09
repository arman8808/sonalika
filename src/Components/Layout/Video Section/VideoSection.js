import React from "react";
import "./VideoSection.css";
import img from "../../Assests/Image/Rectangle 48.png";
import img1 from "../../Assests/Image/Rectangle 49.png";
import img2 from "../../Assests/Image/Rectangle 50.png";
import img3 from "../../Assests/Image/Rectangle 51.png";
import video from "../../Assests/video/production_id_4004214 (1080p).mp4";
import video1 from "../../Assests/video/production-id-4004214-1080p.mp4";
import video2 from "../../Assests/video/1103135-1080p-Detail-Pretty-1920.mp4";
function VideoSection() {
  return (
    <div className="videosection">
      <div className="videosection_heading">
        <h3>Short video </h3>
      </div>
      <div className="videosection_video_card">
        <video controls autoPlay={false}>
          <source src={video} type="video/mp4" />
        </video> 
        <video controls autoPlay={false}>
          <source src={video1} type="video/mp4" />
        </video> 
        <video controls autoPlay={false}>
          <source src={video2} type="video/mp4" />
        </video>
        <video controls autoPlay={false}>
          <source src={video} type="video/mp4" />
        </video> 
        <video controls autoPlay={false}>
          <source src={video1} type="video/mp4" />
        </video> 
        <video controls autoPlay={false}>
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default VideoSection;
