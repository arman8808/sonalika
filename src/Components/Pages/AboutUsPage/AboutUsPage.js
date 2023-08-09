import React, { useState } from "react";
import "./AboutUsPage.css";
import img from "../../Assests/Image/Rectangle 256.png";
import img5 from "../../Assests/Image/BG (2).png";
import img6 from "../../Assests/Image/BG (1).png";
import img7 from "../../Assests/Image/BG1.png";
import Footer from "../../Layout/Footer/Footer";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import FounderCard from "../../Cards/FounderCard/FounderCard";
import DirectorCard from "../../Cards/DirectorCard/DirectorCard";
import AboutusAllPromise from "../../Banner/AboutusAllPromise/AboutusAllPromise";
import EmployeeSection from "../../Layout/EmployeeSection/EmployeeSection";
import pdf from "../../Assests/pdf/dummy.pdf";
import { useForm } from "react-hook-form";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
function AboutUsPage() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    boxShadow: 24,
    p: 4,
    outline:'0',
    borderRadius:'4px'
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    handleOpen()
  };

  return (
    <>
      <UpperNavBar />
      <MainNavBar />
      <div className="AboutusPage">
        <div
          className="AboutusPage_banner"
          style={{ backgroundImage: `url("${img}")` }}
        >
          <h3>We believe we can all make a difference.</h3>
          <p>
            This is a powerful benefit of using translation software—it not only
            produces a highly accurate output translation, it also produces an
            output that is faithfu
          </p>
        </div>
        <h3>FOUNDER </h3>
        <div className="AboutusPage_container1">
          <FounderCard />
          <FounderCard />
          <FounderCard />
        </div>
        <div className="AboutusPage_director">
          <div className="AboutusPage_director_heading">
            <h3>DIRECTOR</h3>
            <p>
              Clarity gives you the blocks & components you need to create a
              truly professional website, landing page or admin panel for your
              SaaS.
            </p>
          </div>
          <div className="AboutusPage_director_cards">
            <DirectorCard image={img5} />
            <DirectorCard
              image={img6}
              title={"Leslie Alexander"}
              subtitle={"Co-Founder of Womenia"}
            />
            <DirectorCard
              image={img7}
              title={"Courtney Henry"}
              subtitle={"Founder of CH Beauty"}
            />
          </div>
        </div>
        <div className="AboutusPage_promise_icon">
          <AboutusAllPromise />
        </div>
        <div className="AboutusPage_team_section">
          <div className="AboutusPage_team_section_heading">
            <h3>Meet our team</h3>
            <p>
              Clarity gives you the blocks & components you need to create a
              truly professional website, landing page or admin panel for your
              SaaS.
            </p>
          </div>
          <div className="AboutusPage_team_section_cards">
            <EmployeeSection />
          </div>
        </div>
        <div className="AboutusPage_description">
          <p>
            At our company, we are acutely aware of the utmost importance of our
            work to our customers and are extremely passionate about providing
            world-class services and solutions, ensuring the latest innovations
            and trends in technology are always incorporated. We take great
            pride in our commitment to quality and customer care and are
            dedicated to delivering results driven solutions that are based
            entirely on our insight and experience, allowing our customers to
            enjoy the most advantageous and satisfactory experience. Our highly
            clever and experienced team is well versed in developing superior
            solutions that are crafted to the specific criteria of our
            customers. At the root of our work, we understand that customer
            delight is key to the prosperity of our business and we make sure
            that we establish durable, trust-filled partnerships with each of
            our customers who put their faith in us with their projects.
          </p>
          <p>
            At our company, we are acutely aware of the utmost importance of our
            work to our customers and are extremely passionate about providing
            world-class services and solutions, ensuring the latest innovations
            and trends in technology are always incorporated. We take great
            pride in our commitment to quality and customer care and are
            dedicated to delivering results driven solutions that are based
            entirely on our insight and experience, allowing our customers to
            enjoy the most advantageous and satisfactory experience. Our highly
            clever and experienced team is well versed in developing superior
            solutions that are crafted to the specific criteria of our
            customers. At the root of our work, we understand that customer
            delight is key to the prosperity of our business and we make sure
            that we establish durable, trust-filled partnerships with each of
            our customers who put their faith in us with their projects.
          </p>
          <span>
            <a href={pdf} target="_blank" rel="noreferrer">
              <button>Download Pdf</button>
            </a>
          </span>
        </div>
        {/* <div className="AboutusPage_review">
          <div className="AboutusPage_review_heading">
            <h3>Customer Reviews</h3>
          </div>
          <div className="AboutusPage_review_card">
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
          </div>
        </div> */}
        <div className="AboutusPage_contact">
          <div className="AboutusPage_contact_left">
            <p>CUSTOMER SERVICES</p>
            <p>+91 12 450-15-415</p>
            <p>Monday – Friday: 9:00AM - 8:00PM</p>
          </div>
          <div className="AboutusPage_contact_right">
            <p>NEW SLETTER</p>
            <span>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("newsLetterEmail", {
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                <button>Submit</button>
              </form>
            </span>
            {errors.newsLetterEmail && (
              <p className="loginFormError">Please Enter Valid Email</p>
            )}
            <p className="AboutusPage_contact_right_para">
              Sign up to get the latest on new Products, Promotions, Design news
              and more
            </p>
          </div>
        </div>
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
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
             Thanks For Subscribing   Our NewsLetter
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default AboutUsPage;
