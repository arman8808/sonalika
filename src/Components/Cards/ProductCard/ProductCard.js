import React, { useState } from "react";
import "./ProductCard.css";
import img from "../../Assests/Image/image 12.png";
import { useNavigate } from "react-router-dom";
import { Favorite, FavoriteBorder, Share } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishList,
  getCartTotal,
  removeWishList,
} from "../../../Slice/cartSlice";
import { useEffect } from "react";
import { Alert, Snackbar } from "@mui/material";
function ProductCard({ marginright }) {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [addedWishlist, setAddedWishlist] = useState(false);
  const { cart, totalPrice, totalQuantity, wishlist } = useSelector(
    (state) => state.allCart
  );

  const productData = {
    name: "New Product",
    id: 1,
    quantity: 1,
    price: 5000,
  };
  const addToCartHandle = () => {
    dispatch(addToCart(productData));
    handleClick();
  };
  const wishlistAddHandle = () => {
    setAddedWishlist(true);
    console.log(addedWishlist);

    handleClick1();
  };
  const wishlistRemoveHandle = () => {
    setAddedWishlist(false);
    handleClick2()
    console.log(addedWishlist);
  };
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const [open1, setOpen1] = useState(false);


  const handleClick1 = () => {
    setOpen1(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen1(false);
  };
  const [open2, setOpen2] = useState(false);
  const handleClick2 = () => {
    setOpen2(true);
  };
  const handleClose2 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen2(false);
  };
  return (
    <div className="productcard" style={{ marginRight: `${marginright}` }}>
      <div
        className="productcard_top"
        onClick={() => history("/singleproductpage")}
      >
        <img src={img} alt="product img" />
      </div>
      <div className="productcard_bottom">
        <p>Beaded double necklace</p>
        <span>
          <strong>₹12,000</strong>
          <p>24K</p>
        </span>
      </div>
      <div className="productcard_addtocard slide-top">
        <button onClick={addToCartHandle}>Add To Card</button>
      </div>
      <div className="productcard_shareanlike scale-in-right">
        <span>
          {addedWishlist === true ? (
            <Favorite style={{ color: "red" }} onClick={wishlistRemoveHandle} />
          ) : (
            <FavoriteBorder onClick={wishlistAddHandle} />
          )}
        </span>

        <span>
          <Share />
        </span>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Successfully Added To Cart
        </Alert>
      </Snackbar>
      <Snackbar
        open={open1}
        autoHideDuration={4000}
        onClose={handleClose1}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose1} severity="success" sx={{ width: "100%" }}>
          Successfully Added To WishList
        </Alert>
      </Snackbar>
       <Snackbar
        open={open2}
        autoHideDuration={4000}
        onClose={handleClose2}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose1} severity="info" sx={{ width: "100%" }}>
          Successfully Removed From WishList
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ProductCard;
