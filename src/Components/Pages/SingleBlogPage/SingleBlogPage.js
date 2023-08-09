import React from "react";
import "./SingleBlogPage.css";
import img from "../../Assests/Image/image 181.png";
import Footer from "../../Layout/Footer/Footer";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  PinterestIcon,
  PinterestShareButton,
} from "react-share";
function SingleBlogPage() {
  return (
    <>
      <UpperNavBar />
      <MainNavBar />
      <div className="singleblogpage">
        <div className="singleblogpage_breadcrums">
          <span>
            <Link to="/">Home</Link> / <Link to="/blogpage">Blog</Link> / Blog
            Name
          </span>
          <span className="singleblogpage_breadcrums_icons">
            <FacebookShareButton url="www.google.com">
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <WhatsappShareButton url="www.google.com">
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>

            <TwitterShareButton url="www.google.com">
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <PinterestShareButton
              url="www.google.com"
              description="This is a blog"
            >
              <PinterestIcon size={32} round={true} />
            </PinterestShareButton>
          </span>
        </div>
        <div className="singleblogpage_banner">
          <img src={img} alt="banner" />
        </div>
        <div className="singleblogpage_details">
          <p className="singleblogpage_details_para">
            Introduction: Blogging, an integral part of the digital era, has
            witnessed remarkable growth and transformation over the years. From
            its humble beginnings as personal online diaries, blogs have now
            emerged as powerful platforms for sharing knowledge, expressing
            creativity, and sparking conversations across the globe.
          </p>
          <ol>
            <li>
              The Genesis of Blogging: A Digital Diary At the turn of the
              millennium, the first seeds of blogging were sown with the
              emergence of online diaries, where individuals would share their
              thoughts, daily experiences, and musings. Early bloggers paved the
              way for a new mode of self-expression, providing a glimpse into
              their lives while unknowingly setting the foundation for an
              influential phenomenon.
            </li>
            <li>
              The Rise of Professional Blogging: Knowledge-Sharing Revolution As
              the internet expanded, so did the scope of blogging. Bloggers
              began sharing expertise, insights, and advice, giving rise to
              professional blogging in various niches. From tech enthusiasts to
              culinary connoisseurs, experts and enthusiasts alike found their
              voice on the virtual stage, captivating audiences and building
              vibrant online communities.
            </li>
            <li>
              Impact on Communication and Media Landscape Blogging's impact on
              traditional media cannot be overstated. As bloggers gained
              credibility and influence, they challenged the monopoly of
              mainstream media, offering alternative perspectives and grassroots
              reporting. The blogosphere became a breeding ground for diverse
              ideas, leading to a democratization of information sharing.
            </li>
          </ol>
        </div>
        <div className="singleblogpage_details">
          <p className="singleblogpage_details_para">
            Introduction: Blogging, an integral part of the digital era, has
            witnessed remarkable growth and transformation over the years. From
            its humble beginnings as personal online diaries, blogs have now
            emerged as powerful platforms for sharing knowledge, expressing
            creativity, and sparking conversations across the globe.
          </p>
          <ol>
            <li>
              The Genesis of Blogging: A Digital Diary At the turn of the
              millennium, the first seeds of blogging were sown with the
              emergence of online diaries, where individuals would share their
              thoughts, daily experiences, and musings. Early bloggers paved the
              way for a new mode of self-expression, providing a glimpse into
              their lives while unknowingly setting the foundation for an
              influential phenomenon.
            </li>
            <li>
              The Rise of Professional Blogging: Knowledge-Sharing Revolution As
              the internet expanded, so did the scope of blogging. Bloggers
              began sharing expertise, insights, and advice, giving rise to
              professional blogging in various niches. From tech enthusiasts to
              culinary connoisseurs, experts and enthusiasts alike found their
              voice on the virtual stage, captivating audiences and building
              vibrant online communities.
            </li>
            <li>
              Impact on Communication and Media Landscape Blogging's impact on
              traditional media cannot be overstated. As bloggers gained
              credibility and influence, they challenged the monopoly of
              mainstream media, offering alternative perspectives and grassroots
              reporting. The blogosphere became a breeding ground for diverse
              ideas, leading to a democratization of information sharing.
            </li>
          </ol>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SingleBlogPage;
