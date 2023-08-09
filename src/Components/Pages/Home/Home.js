import React, { useEffect, useState } from "react";
import "./Home.css";
import HomeBanner from "../../Banner/HomeBanner/HomeBanner";
import AllPromises from "../../Banner/AllPromises/AllPromises";
import img from "../../Assests/Image/image 46-1.png";
import img1 from "../../Assests/Image/image 46-2.png";
import img2 from "../../Assests/Image/image 46.png";
import img3 from "../../Assests/Image/image 56.png";
import img4 from "../../Assests/Image/pop up.png";
import FeaturedDeals from "../../Layout/Featured Deals/FeaturedDeals";
import NewCollection from "../../Layout/NewCollection/NewCollection";
import TopCollection from "../../Layout/Top Collection/TopCollection";
import VideoSection from "../../Layout/Video Section/VideoSection";
import DealoFWeek from "../../Layout/DealoFWeek/DealoFWeek";
import CounterCard from "../../Cards/CounterCard/CounterCard";
import Testimonial from "../../Layout/Testimonial/Testimonial";
import Footer from "../../Layout/Footer/Footer";
import BlogSection from "../../Layout/Blog Section/BlogSection";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import TryAtHome from "../../Layout/TryAtHome/TryAtHome";
import GoldSipSection from "../../Layout/GoldSipSection/GoldSipSection";
import { Backdrop, Box, Fade, Modal } from "@mui/material";

function Home() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 400,
    bgcolor: "transparent",
    border: "0px solid #fff",
    boxShadow: 0,
    p: 4,
    outline: "0",
    padding: "0",
    borderRadius: "5px",
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    setTimeout(() => {
      handleOpen();
    }, 5000);
  }, []);
  const data = [
    {
      title: "New Modern Collection",
      paragraph: ` Elegance isn't solely defined by what you wear. It's how you carry
    yourself, how you speak, what you read.`,
      img: img,
    },
    {
      title: "New Modern Collection",
      paragraph: ` Elegance isn't solely defined by what you wear. It's how you carry
    yourself, how you speak, what you read.`,
      img: img1,
    },
    {
      title: "New Modern Collection",
      paragraph: ` Elegance isn't solely defined by what you wear. It's how you carry
    yourself, how you speak, what you read.`,
      img: img2,
    },
    {
      title: "New Modern Collection",
      paragraph: ` Elegance isn't solely defined by what you wear. It's how you carry
    yourself, how you speak, what you read.`,
      img: img3,
    },
  ];
  return (
    <>
      <UpperNavBar />
      <MainNavBar />
      <div className="home">
        <HomeBanner data={data} />

        <AllPromises />
        <FeaturedDeals />
        <NewCollection />
        <TopCollection />
        <VideoSection />
        <DealoFWeek />
        <TryAtHome />
        <CounterCard />
        <GoldSipSection />
        <Testimonial />
        <BlogSection />
        <Footer />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="modalbox">
            <img src={img4} alt="" className="modalhomepagepopup" />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default Home;
