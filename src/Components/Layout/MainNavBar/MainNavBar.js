import React, { useEffect, useState } from "react";
import "./MainNavBar.css";
import mainLogo from "../../Assests/Image/500 x 500 new new 1.jpg";
import Logo from "../../Assests/Image/Group 3657.png";
import google from "../../Assests/Image/Google.png";
import facebook from "../../Assests/Image/fb.png";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ShoppingCartCheckout from "@mui/icons-material/ShoppingCartCheckout";
import Search from "@mui/icons-material/Search";
import img from "../../Assests/Image/navbar/bride-s-jewelery-indian-wedding 1.png";
import img1 from "../../Assests/Image/navbar/beautiful-girl-wears-chic-earrings 1.png";
import img2 from "../../Assests/Image/navbar/indian-traditional-jewellery-soft-cloth 1.png";
import img3 from "../../Assests/Image/navbar/gorgeous-woman-is-wearing-beautiful-jewellery 1.png";
import img4 from "../../Assests/Image/navbar/young-pretty-woman-wearing-exquisite-makeup-indian-national-suit-with-posh-jewelry-set 1.png";
import img5 from "../../Assests/Image/navbar/golden-bangles-stone 1.png";
import { Backdrop, Box, Fade, IconButton, Modal } from "@mui/material";
import {
  Email,
  KeyboardArrowDown,
  LockPerson,
  Menu,
  Phone,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
function MainNavBar() {
  const history = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [passwordSingUp, setPasswordSingUp] = useState("password");
  const passwordSingupHandle = () => {
    passwordSingUp === "password"
      ? setPasswordSingUp("text")
      : setPasswordSingUp("password");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const onSubmit1 = (data) => console.log(data);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
    outline: "0",
    borderRadius: "5px",
  };
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);
  const [login, setLogin] = useState(true);
  const [signIn, setSignIn] = useState(false);
  const loginFormhanndle = () => {
    setLogin(true);
    setSignIn(false);
  };
  const signInFormhanndle = () => {
    setLogin(false);
    setSignIn(true);
  };
  const [mobileNavWidth, setMobileNavWidth] = useState(0);
  const mobileNavhandle = () => {
    mobileNavWidth === 300 ? setMobileNavWidth(0) : setMobileNavWidth(300);
    console.log(mobileNavWidth);
  };

  const { cart, wishlist } = useSelector((state) => state.allCart);
  let activeStyle = {
    color: "#d20305",
    fontweight: "700",
  };
  const [product, setProduct] = useState(false);
  return (
    <div className="mainnavbar">
      <div className="mainnavbar_left">
        <img
          src={mainLogo}
          alt="logo"
          className={scrolled ? "normal_logo" : "absolute_logo"}
          onClick={() => history("/")}
        />
      </div>
      <div className="mobile_icons">
        <div className="mainnavbar_mobile_cart_widhlist">
          <span>
            <FavoriteBorder onClick={() => history("/wishlist")} />

            {wishlist?.length > 0 && (
              <p className="mainnavbar_mobile_cart_widhlist_notification1"></p>
            )}
          </span>
          <span>
            <ShoppingCartCheckout onClick={() => history("/cart")} />

            {cart?.length > 0 && (
              <p className="mainnavbar_mobile_cart_widhlist_notification">
                <strong>{cart?.length} </strong>
              </p>
            )}
          </span>
        </div>
        <div className="mainnavbar_mobile" onClick={mobileNavhandle}>
          <IconButton>
            <Menu />
          </IconButton>
        </div>
      </div>

      <div className="mainnavbar_center">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutus"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About
        </NavLink>
        <div className="mainnavbar_center_div">
          <p>Product <KeyboardArrowDown className="mainnavbar_center_div1_icon"/></p>
          <div className="mainnavbar_center_div_div">
            <div className="mainnavbar_center_div_div_arrow"></div>
            <div className="mainnavbar_center_div_div_main">
              <div className="mainnavbar_center_div_div_div">
                <img src={img} alt="banner" />
                <span>
                  <p>Gold</p>
                  <ul>
                    <li>
                      <Link to="#">Gold Necklace</Link>
                    </li>
                    <li>
                      <Link to="#">Gold Chain Necklace</Link>
                    </li>
                    <li>
                      <Link to="#"> Gold Disc Necklace </Link>
                    </li>
                    <li>
                      <Link to="#">Gold Pendant Necklace</Link>
                    </li>
                    <li>
                      <Link to="#">Gold Pendant Necklace</Link>
                    </li>
                  </ul>
                </span>
              </div>
              <div className="mainnavbar_center_div_div_div">
                <img src={img1} alt="banner" />
                <span>
                  <p>Diamond</p>
                  <ul>
                    <li>
                      <Link to="#">Diamond Earrings</Link>
                    </li>
                    <li>
                      <Link to="#">Diamond Necklaces</Link>
                    </li>
                    <li>
                      <Link to="#">Diamond Bracelets</Link>
                    </li>
                    <li>
                      <Link to="#">Diamond Rings</Link>
                    </li>
                    <li>
                      <Link to="#">Diamond Pendants</Link>
                    </li>
                  </ul>
                </span>
              </div>
              <div className="mainnavbar_center_div_div_div">
                <img src={img2} alt="banner" />
                <span>
                  <p>Mangal sutra</p>
                  <ul>
                    <li>
                      <Link to="#">Mangal sutra</Link>
                    </li>
                  </ul>
                </span>
              </div>
              <div className="mainnavbar_center_div_div_div">
                <img src={img3} alt="banner" />
                <span>
                  <p>Silver</p>
                  <ul>
                    <li>
                      <Link to="#">Silver coins</Link>
                    </li>
                    <li>
                      <Link to="#">Silver bars</Link>
                    </li>
                    <li>
                      <Link to="#"> Silver jewelry </Link>
                    </li>
                    <li>
                      <Link to="#">Silverware sets</Link>
                    </li>
                    <li>
                      <Link to="#">Silver antiques</Link>
                    </li>
                  </ul>
                </span>
              </div>
              <div className="mainnavbar_center_div_div_div">
                <img src={img4} alt="banner" />
                <span>
                  <p>Jadau</p>
                  <ul>
                    <li>
                      <Link to="#">Jadau jewellery</Link>
                    </li>
                    <li>
                      <Link to="#">Jadau necklace</Link>
                    </li>
                    <li>
                      <Link to="#">Jadau bracelets</Link>
                    </li>
                    <li>
                      <Link to="#">Jadau rings</Link>
                    </li>
                    <li>
                      <Link to="#">Jadau earrings</Link>
                    </li>
                  </ul>
                </span>
              </div>
              <div className="mainnavbar_center_div_div_div">
                <img src={img5} alt="banner" />
                <span>
                  <p>Bangles</p>
                  <ul>
                    <li>
                      <Link to="#">Gold bangles</Link>
                    </li>
                    <li>
                      <Link to="#">Silver bangles</Link>
                    </li>
                    <li>
                      <Link to="#"> Pearl bangles </Link>
                    </li>
                    <li>
                      <Link to="#">Stone bangles</Link>
                    </li>
                    <li>
                      <Link to="#">Colorful bangles</Link>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <NavLink to="/productpage" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Product</NavLink> */}
        <NavLink
          to="/blogpage"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Blog
        </NavLink>
        <NavLink
          to="/astrology"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          GemsStone
        </NavLink>
        <div className="mainnavbar_center_div1">
          <p>Careers <KeyboardArrowDown className="mainnavbar_center_div1_icon"/></p>
          <div className="mainnavbar_center_div1_main">
            <div className="mainnavbar_center_div1_main_arrow"></div>
            <span className="mainnavbar_center_div_div1">
              <p>New Jobs</p>
              <p>New Jobs</p>
              <p>New Jobs</p>
              <p>New Jobs</p>
            </span>
          </div>
        </div>

        <NavLink
          to="/singlecontactpage"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contact Us
        </NavLink>
      </div>
      <div className="mainnavbar_right">
        <span>
          <input type="text" placeholder="Search Here" />
          <Search />
        </span>
        <span className="mainnavbar_right_span1">
          <FavoriteBorder onClick={() => history("/wishlist")} />
          {wishlist?.length > 0 && <p></p>}
        </span>

        <span className="mainnavbar_right_span">
          <ShoppingCartCheckout onClick={() => history("/cart")} />
          {cart?.length > 0 && (
            <p>
              <strong>{cart?.length} </strong>
            </p>
          )}
        </span>

        <button onClick={handleOpen}>login</button>
       
      </div>
      <div
        className="mobile_nav_menu sidenav"
        id="mySidenav"
        style={{ width: `${mobileNavWidth}px` }}
      >
        <a
          href="javascript:void(0)"
          class="closebtn"
          onclick="closeNav()"
          onClick={mobileNavhandle}
        >
          &times;
        </a>
        <span className="mobile_nav_menu_span">
          <input type="text" placeholder="Search Here" />
        </span>
        <Link to="/">Home</Link>
        <Link to="/aboutus">About</Link>
        <p onClick={() => setProduct(!product)}>Product</p>
        {product && (
          <span className="mobile_nav_menu_span_second">
            <p>Gold</p>
            <p>Sliver</p>
            <p>Necklace</p>
            <p>Mangal Sutra</p>
          </span>
        )}
        <Link to="/blogpage">Blog</Link>
        <Link to="/">Careers</Link>
        <Link to="/singlecontactpage">Conatct Us</Link>
        <Link to="/astrology">GemsStone</Link>
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
            <div className="modal_login_form">
              <div className="modal_login_form_left">
                <span>
                  <img src={mainLogo} alt="logo" />
                </span>
                <img src={Logo} alt="original logo" />
              </div>
              <div className="modal_login_form_right">
                <h3>Welcome back 😉 </h3>
                <p>
                  To keep connnected with us please login with your personal
                  information by email address and password
                </p>
                {login && (
                  <form onSubmit={handleSubmit(onSubmit1)}>
                    <span className="modal_login_form_right_span">
                      <Email
                        style={{ color: "lightgrey", marginLeft: "5px" }}
                      />
                      <input
                        type="text"
                        placeholder="Email Address"
                        {...register("loginEmail", {
                          required: true,
                          pattern:
                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                      />
                    </span>
                    {errors.loginEmail && (
                      <p className="loginFormError">Please Enter Valid Email</p>
                    )}
                    <span className="modal_login_form_right_span">
                      <LockPerson
                        style={{ color: "lightgrey", marginLeft: "5px" }}
                      />
                      <input
                        type={passwordSingUp}
                        placeholder="Password"
                        {...register("loginPassword", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be more than 6 characters",
                          },
                          maxLength: {
                            value: 12,
                            message:
                              "Password cannot exceed more than 12 characters",
                          },
                        })}
                      />
                      {passwordSingUp === "password" ? (
                        <VisibilityOff
                          style={{
                            color: "lightgrey",
                            cursor: "pointer",
                            marginRight: "5px",
                          }}
                          onClick={passwordSingupHandle}
                        />
                      ) : (
                        <Visibility
                          style={{
                            color: "lightgrey",
                            cursor: "pointer",
                            marginRight: "5px",
                          }}
                          onClick={passwordSingupHandle}
                        />
                      )}
                    </span>
                    {errors.loginPassword && (
                      <p className="loginFormError">
                        {errors?.loginPassword?.message}
                      </p>
                    )}
                    <div>
                      <span>
                        <input type="checkbox" />
                        <p>Remember ME</p>
                      </span>
                      <Link to="/forgotpassword" target="_blank">
                        Forget password?
                      </Link>
                    </div>
                    <span>
                      <button className="loginbutton">Login Now</button>
                      <button
                        className="createbutton"
                        onClick={signInFormhanndle}
                      >
                        Create Account
                      </button>
                    </span>
                  </form>
                )}
                {signIn && (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <span className="modal_login_form_right_span">
                      <Email
                        style={{ color: "lightgrey", marginLeft: "5px" }}
                      />
                      <input
                        type="text"
                        placeholder="Email Address"
                        {...register("registerEmail", {
                          required: true,
                          pattern:
                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                      />
                    </span>

                    {errors.registerEmail && (
                      <p className="loginFormError">Please Enter Valid Email</p>
                    )}

                    <span className="modal_login_form_right_span">
                      <Phone
                        style={{ color: "lightgrey", marginLeft: "5px" }}
                      />
                      <input
                        type="text"
                        placeholder="Phone Number"
                        {...register("registerMobile", {
                          required: true,
                          pattern: /^[0-9+-]+$/,
                          minLength: 10,
                          maxLength: 12,
                        })}
                      />
                    </span>
                    {errors.registerMobile && (
                      <p className="loginFormError">
                        Please Enter Valid Number
                      </p>
                    )}
                    <span className="modal_login_form_right_span">
                      <LockPerson
                        style={{ color: "lightgrey", marginLeft: "5px" }}
                      />
                      <input
                        type={passwordSingUp}
                        placeholder="Create Password"
                        {...register("registerPassword", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be more than 6 characters",
                          },
                          maxLength: {
                            value: 12,
                            message:
                              "Password cannot exceed more than 12 characters",
                          },
                        })}
                      />
                      {passwordSingUp === "password" ? (
                        <VisibilityOff
                          style={{
                            color: "lightgrey",
                            cursor: "pointer",
                            marginRight: "5px",
                          }}
                          onClick={passwordSingupHandle}
                        />
                      ) : (
                        <Visibility
                          style={{
                            color: "lightgrey",
                            cursor: "pointer",
                            marginRight: "5px",
                          }}
                          onClick={passwordSingupHandle}
                        />
                      )}
                    </span>
                    {errors.registerPassword && (
                      <p className="loginFormError">
                        {errors?.registerPassword?.message}
                      </p>
                    )}
                    <span>
                      <button className="loginbutton">Sign In </button>
                      <button
                        className="createbutton"
                        onClick={loginFormhanndle}
                      >
                        Login
                      </button>
                    </span>
                  </form>
                )}
                <div>
                  <p>Or you can join with</p>
                  <span>
                    <img src={google} alt="google login logo" />
                    <img src={facebook} alt="facebook login logo" />
                  </span>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default MainNavBar;
