import React from "react";
import "./BlogPage.css";
import { Link } from "react-router-dom";
import BlogCard from "../../Cards/BlogCard/BlogCard";
import Footer from "../../Layout/Footer/Footer";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
function BlogPage() {
  return (
    <>
      <UpperNavBar />
      <MainNavBar />
      <div className="blogpage">
        <div className="blogpage_breadcrums">
          <Link to="/">Home</Link> / <p>Blog</p>
        </div>
        <div className="blogpage_cards">
          <BlogCard marginRight="20px" />
          <BlogCard marginRight="20px" />
          <BlogCard marginRight="20px" />
          <BlogCard marginRight="20px" />
          <BlogCard marginRight="20px" />
          <BlogCard marginRight="20px" />
          <BlogCard marginRight="20px" />
          <BlogCard marginRight="20px" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BlogPage;
