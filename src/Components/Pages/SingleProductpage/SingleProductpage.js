import React, { useState } from "react";
import "./SingleProductpage.css";
import { Link } from "react-router-dom";
import img1 from "../../Assests/Image/image 25.png";
import img2 from "../../Assests/Image/image 26.png";
import img3 from "../../Assests/Image/image 27.png";
import img4 from "../../Assests/Image/image 28.png";
import img6 from "../../Assests/Image/Ellipse 7.png";
import img7 from "../../Assests/Image/Vector-1.png";
import {
  Create,
  FavoriteBorder,
  FilterList,
  HelpOutline,
  LocalMall,
  Search,
  Send,
  Star,
  StarHalf,
} from "@mui/icons-material";
import Footer from "../../Layout/Footer/Footer";
import {
  Backdrop,
  Box,
  Fade,
  IconButton,
  Modal,
  Rating,
  Stack,
} from "@mui/material";
import ProductReviewCard from "../../Cards/ProductReviewCard/ProductReviewCard";
import SimilarProductCard from "../../Cards/SimilarProductCard/SimilarProductCard";
import ViewerAlsoLike from "../../Cards/ViewerAlsoLike/ViewerAlsoLike";
import Quantity from "../../Layout/Quantity/Quantity";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import ReactImageMagnify from "react-image-magnify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Slice/cartSlice";

function SingleProductpage() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
    outline: "0",
    padding: "20px",
  };
  const style1 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "0px solid #fff",
    boxShadow: 24,
    p: 4,
    outline: "0",
    padding: "0",
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const image = [img1, img2, img3, img4];
  const [description, setDescription] = useState(true);
  const [review, setReview] = useState(false);
  const [qandA, setQandA] = useState(false);
  const handleSelect = (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent === "Description") {
      setDescription(true);
      setQandA(false);
      setReview(false);
    }
    if (e.target.textContent === "Reviews") {
      setDescription(false);
      setQandA(false);
      setReview(true);
    }
    if (e.target.textContent === "Q&A") {
      setDescription(false);
      setQandA(true);
      setReview(false);
    }
  };
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(image[0]);
  const productData = {
    name: "New Product",
    id: 2,
    quantity: 1,
    price: 8000,
  };
  const dispatch = useDispatch();
  const selectedImagehandle = (e) => {
    setSelectedImage(e.target.src);
  };
  return (
    <>
      <UpperNavBar />
      <MainNavBar />

      <div className="singleproductpage">
        <div className="singleproductpage_breadcrum">
          <Link to="/">Home</Link> / <p>Product</p>
        </div>
        <div className="singleproductpage_first">
          <div className="singleproductpage_first_left">
            <div className="singleproductpage_first_left_small_img">
              {image?.map((item) => (
                <span>
                  <img src={item} alt="product" onClick={selectedImagehandle}/>
                </span>
              ))}
            </div>
            <div className="singleproductpage_first_left_large_img">
              <span className="singleproductpage_first_left_large_img_icon">
                <IconButton>
                  <FavoriteBorder className="singleproductpage_first_left_large_img_icon_icon" />
                </IconButton>
              </span>

              <span className="singleproductpage_first_left_large_img_span">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src: selectedImage,
                    },
                    largeImage: {
                      src: selectedImage,
                      width: 300,
                      height: 100,
                    },
                    enlargedImageContainerDimensions: {
                      width: "100%",
                      height: "80%",
                    },
                  }}
                />
                {/* <img src={img5} alt="product" /> */}
              </span>
            </div>
          </div>
          <div className="singleproductpage_first_right">
            <h3>Embossed hoop earrings</h3>
            <div>
              <span>
                <Star style={{ color: "#FFB400" }} />
                <Star style={{ color: "#FFB400" }} />
                <Star style={{ color: "#FFB400" }} />
                <Star style={{ color: "#FFB400" }} />
                <StarHalf style={{ color: "#FFB400" }} />
              </span>
              <p>1 REVIEW</p>
            </div>
            <p>
              Pretty embossed hoop earrings that bring an edgy and cool vibe to
              any outfit. Feel extra special wearing these embossed hoop
              earrings that have a unique texture and add a touch of classic
              sophistication to your look. Whether you choose sterling silver or
              gold, you're sure to look stunning. These hoop earrings are
              perfect for a night out or for brightening up your everyday
              wardrobe.
            </p>
            <span>
              <p className="singleproductpage_first_right_span_live">Live</p>
              <p>₹16,000 </p>
              <p style={{ color: "#686868", fontSize: "12px" }}> +18%GST</p>
            </span>
            <div className="singlepage_customization">
              <p>Customization</p>
              <div className="singlepage_customization_div">
                <span>
                  <p>14kt</p>
                  <p>18kt</p>
                </span>
                <span>Select Size</span>
              </div>
              <div className="singlepage_customization_jewellery_type">
                <span>
                  <img src={img7} alt="jewellery type" />
                  <p>Diamond</p>
                </span>
                <span>
                  <p>SI IJ</p>
                  <p>SI GH</p>
                  <p>VS GH</p>
                  <p>VSS EF</p>
                </span>
              </div>
              <div className="singlepage_customization_quantity">
                <div className="singlepage_customization_quantity_top">
                  <Quantity quantity={quantity} setQuantity={setQuantity} />
                  <button onClick={() => dispatch(addToCart(productData))}>
                    <p>Add To Cart</p> <LocalMall />
                  </button>
                </div>
                <div className="singlepage_customization_quantity_bottom">
                  <span>
                    <p>2- Day Delivery</p>
                  </span>
                  <span>
                    <p>Speedy and reliable parcel delivery</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="singleproductpage_second">
          <div className="singleproductpage_second_heading">
            <p
              onClick={handleSelect}
              className={description ? "singleproductpage_active" : ""}
            >
              Description
            </p>
            <p
              onClick={handleSelect}
              className={review ? "singleproductpage_active" : ""}
            >
              Reviews
            </p>
            <p
              onClick={handleSelect}
              className={qandA ? "singleproductpage_active" : ""}
            >
              Q&A
            </p>
          </div>
          {description && (
            <div className="singleproductpage_second_description">
              <p>
                Our favorite jean meets our favorite decade. Made from premium
                non-stretch Japanese denim for a vintage-inspired look, the ’90s
                Cheeky Jean has an easy straight leg, an extra-high rise, and a
                butt-boosting rear fit. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas.
                Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
                sit amet, ante. Donec eu libero sit amet quam egestas semper.
                Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
              </p>
              <div>
                <span>
                  <p>Weight</p>:<p>1KG</p>
                </span>
                <span>
                  <p>dimensions </p>:<p> 10x11x22 cm </p>
                </span>{" "}
                <span>
                  <p>color </p>:<p> blue, white , yellow</p>
                </span>
                <span>
                  <p>Sizes </p>:<p> 10k, 14k, 24k</p>
                </span>
              </div>
            </div>
          )}
          {review && (
            <div className="singleproductpage_second_review">
              <div className="singleproductpage_second_review_total_rating">
                <div className="singleproductpage_second_review_total_rating_left">
                  <div>
                    <strong>4.7</strong>
                    <span>
                      <Star style={{ color: "#FFCB45", marginRight: "2px" }} />
                      <Star style={{ color: "#FFCB45", marginRight: "2px" }} />
                      <Star style={{ color: "#FFCB45", marginRight: "2px" }} />
                      <Star style={{ color: "#FFCB45", marginRight: "2px" }} />
                      <StarHalf
                        style={{ color: "#FFCB45", marginRight: "2px" }}
                      />
                    </span>
                    <span>
                      <p>1454 </p>
                      <p>reviews</p>
                    </span>
                  </div>
                  <div className="singleproductpage_second_review_total_rating_left_rating">
                    <div>
                      <span style={{ backgroundColor: "#D9D9D9" }}>
                        <p
                          style={{ backgroundColor: "#4AEE8C", width: "80%" }}
                        ></p>
                      </span>
                      <p>75%</p>
                      <p>982</p>
                    </div>
                    <div>
                      <span style={{ backgroundColor: "#D9D9D9" }}>
                        <p
                          style={{ backgroundColor: "#5FC6CB", width: "60%" }}
                        ></p>
                      </span>
                      <p>75%</p>
                      <p>982</p>
                    </div>
                    <div>
                      <span style={{ backgroundColor: "#D9D9D9" }}>
                        <p
                          style={{ backgroundColor: "#F6D757", width: "40%" }}
                        ></p>
                      </span>
                      <p>75%</p>
                      <p>982</p>
                    </div>
                    <div>
                      <span style={{ backgroundColor: "#D9D9D9" }}>
                        <p
                          style={{ backgroundColor: "#FF7658", width: "20%" }}
                        ></p>
                      </span>
                      <p>75%</p>
                      <p>982</p>
                    </div>
                    <div>
                      <span style={{ backgroundColor: "#D9D9D9" }}>
                        <p
                          style={{ backgroundColor: "#4273B9", width: "10%" }}
                        ></p>
                      </span>
                      <p>75%</p>
                      <p>982</p>
                    </div>
                  </div>
                </div>
                <div className="singleproductpage_second_review_total_rating_right">
                  <span onClick={handleOpen}>
                    <p>Add a Review</p> <Create style={{ color: "#4273B9" }} />
                  </span>
                </div>
              </div>
              <div className="singleproductpage_second_review_card">
                <div className="singleproductpage_second_review_card_heading">
                  <p>Reviews (28)</p>
                  <span>
                    <p>Most Recent </p>
                    <p className="singleproductpage_second_review_card_heading_span_p">
                      <FilterList />
                    </p>
                  </span>
                </div>
                <ProductReviewCard />
                <ProductReviewCard />
                <ProductReviewCard />
              </div>
            </div>
          )}
          {qandA && (
            <div className="singleproductpage_second_QnA">
              <div className="singleproductpage_second_QnA_heading">
                <h3>Q & A</h3>
              </div>
              <div className="singleproductpage_second_QnA_search">
                <input type="text" placeholder="Search Answers" />
                <Search />
              </div>
              <div className="singleproductpage_second_Ask_Question">
                <span onClick={handleOpen1}>
                  <p>Ask a question </p>{" "}
                  <HelpOutline style={{ color: "lightgray" }} />
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="singleproductpage_third">
          <div className="singleproductpage_third_heading">
            <h3>You May Also Like</h3>
          </div>
          <div className="singleproductpage_third_cards">
            <SimilarProductCard />
            <SimilarProductCard />
            <SimilarProductCard />
            <SimilarProductCard />
          </div>
        </div>
        <div className="singleproductpage_fourth">
          <div className="singleproductpage_fourth_heading">
            <h3>Viewers Also Liked</h3>
          </div>
          <div className="singleproductpage_fourth_cards">
            <ViewerAlsoLike marginRight="20px" />
            <ViewerAlsoLike marginRight="20px" />
            <ViewerAlsoLike marginRight="20px" />
            <ViewerAlsoLike marginRight="20px" />
            <ViewerAlsoLike marginRight="20px" />
          </div>
        </div>
        <Footer />
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
            <Box sx={style1}>
              <div className="modal_review">
                <div className="modal_review_heading">
                  <Create />
                  <span>
                    <p>Rate and review</p>
                    <p>Give the product review</p>
                  </span>
                </div>
                <div className="modal_review_review_write">
                  <img src={img6} alt="profile pic" />
                  <div>
                    <h3>Nemesis</h3>
                    <p>Your review will be posted publicly on the web</p>
                    <div>
                      <Stack spacing={1}>
                        <Rating
                          name="half-rating"
                          defaultValue={2.5}
                          precision={0.5}
                          onChange={(e) => console.log(e.target.value)}
                        />
                      </Stack>
                    </div>
                    <span>
                      <input
                        type="text"
                        placeholder="Share details of your own experience at this place ."
                      />
                    </span>
                  </div>
                </div>
                <div className="modal_review_button">
                  <button
                    className="modal_review_button_cancel"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                  <button className="modal_review_button_post">Post</button>
                </div>
              </div>
            </Box>
          </Fade>
        </Modal>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open1}
          onClose={handleClose1}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open1}>
            <Box sx={style}>
              <div className="modal_form">
                <form>
                  <span>
                    <input type="text" placeholder="Name*" />
                  </span>
                  <span>
                    <input type="text" placeholder="Email*" />
                  </span>
                  <span className="modal_form_span">
                    <textarea placeholder="Message me*" rows={8} />
                  </span>
                  <button>
                    <p>Send</p> <Send />
                  </button>
                </form>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
}

export default SingleProductpage;
