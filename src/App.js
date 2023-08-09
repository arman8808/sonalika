import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import TermandCondition from "./Components/Pages/TermandCondition/TermandCondition";
import PrivicyPolicy from "./Components/Pages/PrivicyPolicy/PrivicyPolicy";
import ProductPage from "./Components/Pages/ProductPage/ProductPage";
import ContactUsPage from "./Components/Pages/ContactUsPage/ContactUsPage";
import Faq from "./Components/Pages/Faq/Faq";
import SingleContactPage from "./Components/Pages/SingleContactPage/SingleContactPage";
import ForgetPassword from "./Components/Pages/Forget Password/ForgetPassword";
import AboutUsPage from "./Components/Pages/AboutUsPage/AboutUsPage";
import WishList from "./Components/Pages/WishList/WishList";
import GoToTop from "./GoToTop";
import SingleBlogPage from "./Components/Pages/SingleBlogPage/SingleBlogPage";
import BlogPage from "./Components/Pages/BlogPage/BlogPage";
import CartPage from "./Components/Pages/CartPage/CartPage";
import SingleProductpage from "./Components/Pages/SingleProductpage/SingleProductpage";
import CheckOutPage from "./Components/Pages/CheckOutPage/CheckOutPage";
import OrderComfirmPage from "./Components/Pages/OrderComfirmPage/OrderComfirmPage";
import ProfilePage from "./Components/Pages/ProfilePage/ProfilePage";
import { WhatsApp } from "@mui/icons-material";
import GemsPage from "./Components/Pages/GemsPage/GemsPage";
import GoldSipPage from "./Components/Pages/GoldSipPage/GoldSipPage";
import Admin from "./Components/Admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GoToTop />
        <div className="whatsapp_logo">
          <Link to='https://wa.me/9874563210' target="_blank"> 
          <WhatsApp className="whatsapp_logo_icon"/>
          </Link>
         
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/termandcondition" element={<TermandCondition />} />
          <Route path="/privicypolicy" element={<PrivicyPolicy />} />
          <Route path="/contactuspage" element={<ContactUsPage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/singlecontactpage" element={<SingleContactPage />} />
          <Route path="/forgotpassword" element={<ForgetPassword />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/singleblogpage" element={<SingleBlogPage />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/singleproductpage" element={<SingleProductpage />} />
          <Route path="/orderconfirmpage" element={<OrderComfirmPage />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/astrology" element={<GemsPage />} />
          <Route path="/sipplans" element={<GoldSipPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
