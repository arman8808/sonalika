import { Delete, Edit, List, Search } from "@mui/icons-material";
import "./AllProduct.css";
import {
  Backdrop,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  Modal,
  Slide,
  Typography,
} from "@mui/material";
import React, { forwardRef, useState } from "react";
import img from "../../Asset/Rectangle 110798.png";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import { useEffect } from "react";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function AllProduct() {
  const editor = useRef();
  const [content, setContent] = useState("");
  useEffect(() => {
    console.log(content);
  }, [content]);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
    outline: "0",
    height: "550px",
    overflowY: "scroll",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <List className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p>All Products</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head">
          <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span>
          <button className="addbutton" onClick={handleOpen}>
            Add Product
          </button>
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/L</th>
                <th style={{ width: "250px" }}>IMG</th>
                <th>Brands</th>
                <th>Published</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td style={{ width: "250px" }}>
                  <img
                    src={img}
                    alt="brand"
                    style={{ width1: "100px", height: "50px" }}
                  />
                </td>
                <td>Nemesis</td>
                <td>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </td>
                <td>
                  <Edit
                    style={{
                      color: "#6E798C",
                      marginLeft: "5px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleOpen1}
                  />
                  <Delete
                    style={{
                      color: "#6E798C",
                      marginLeft: "5px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleClickOpen}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="adminorderpage_pagination"></div>
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
        style={{
          overflow: "scroll",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Fade in={open}>
          <Box
            sx={style}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Product Info
            </Typography>
            <form className="modal_form">
              <span>
                <input type="text" placeholder="Product Name" />
              </span>
              <span>
                <select>
                  <option>Category of Product </option>
                  <option>BlueStone</option>
                  <option>BlueStone</option>
                  <option>BlueStone</option>
                  <option>BlueStone</option>
                </select>
              </span>
              <span>
                <select>
                  <option>Select Brand</option>
                  <option>BlueStone</option>
                  <option>BlueStone</option>
                  <option>BlueStone</option>
                  <option>BlueStone</option>
                </select>
              </span>
              <span>
                <input type="text" placeholder="Tags" />
              </span>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Short Description
              </Typography>
              <span>
                <input type="text" placeholder=" Short Description" />
              </span>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Description
              </Typography>
              <JoditEditor
                style={{ width: "100%" }}
                ref={editor}
                onChange={(newContent) => {
                  setContent(newContent);
                }}
              />

              <span></span>
              <p className="modal_form_para">Images</p>

              <input type="file" />
              <div className="modal_form_product_details">
                <div className="modal_form_product_details_heading">
                  <p>Price, Sku & Stock</p>
                </div>
                <div className="modal_form_product_details_details">
                  <span>
                    <p>Price</p>
                    <input type="text" placeholder="price" />
                  </span>
                  <span>
                    <p>Stock</p>
                    <input type="text" placeholder="Stock" />
                  </span>
                  <span>
                    <p>Sku Code</p>
                    <input type="text" placeholder="Sku Code" />
                  </span>
                </div>
              </div>
              <div className="modal_form_product_category">
                <span>
                  <input type="checkbox" />
                  <p>Featured Deals</p>
                </span>
                <span>
                  <input type="checkbox" />
                  <p>NEW COLLECTION</p>
                </span>
                <span>
                  <input type="checkbox" />
                  <p>Deals of the Week</p>
                </span>
              </div>
              <button className="modal_form_buttom">Add Product</button>
            </form>
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
          <Typography id="transition-modal-title" variant="h6" component="h2">
              Product Info
            </Typography>
            <form className="modal_form">
              <span>
                <input type="text" placeholder="Product Name" />
              </span>
              <span>
                <select>
                  <option>Category of Product </option>
                  <option>BlueStone</option>
                  <option>BlueStone</option>
                  <option>BlueStone</option>
                  <option>BlueStone</option>
                </select>
              </span>
              <span>
                <select>
                  <option>Select Brand</option>
                  <option>BlueStone</option>
                  <option>BlueStone</option>
                  <option>BlueStone</option>
                  <option>BlueStone</option>
                </select>
              </span>
              <span>
                <input type="text" placeholder="Tags" />
              </span>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Short Description
              </Typography>
              <span>
                <input type="text" placeholder=" Short Description" />
              </span>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Description
              </Typography>
              <JoditEditor
                style={{ width: "100%" }}
                ref={editor}
                onChange={(newContent) => {
                  setContent(newContent);
                }}
              />

              <span></span>
              <p className="modal_form_para">Images</p>

              <input type="file" />
              <div className="modal_form_product_details">
                <div className="modal_form_product_details_heading">
                  <p>Price, Sku & Stock</p>
                </div>
                <div className="modal_form_product_details_details">
                  <span>
                    <p>Price</p>
                    <input type="text" placeholder="price" />
                  </span>
                  <span>
                    <p>Stock</p>
                    <input type="text" placeholder="Stock" />
                  </span>
                  <span>
                    <p>Sku Code</p>
                    <input type="text" placeholder="Sku Code" />
                  </span>
                </div>
              </div>
              <div className="modal_form_product_category">
                <span>
                  <input type="checkbox" />
                  <p>Featured Deals</p>
                </span>
                <span>
                  <input type="checkbox" />
                  <p>NEW COLLECTION</p>
                </span>
                <span>
                  <input type="checkbox" />
                  <p>Deals of the Week</p>
                </span>
              </div>
              <button className="modal_form_buttom">Update Product</button>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Dialog
        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose2}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Disagree</Button>
          <Button onClick={handleClose2}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AllProduct;
