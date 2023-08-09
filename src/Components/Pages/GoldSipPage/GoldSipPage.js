import React from "react";
import "./GoldSipPage.css";
import { Link } from "react-router-dom";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import img from "../../Assests/Image/gold Sip/gold-bullion-documents-background 1.png";
import img1 from "../../Assests/Image/gold Sip/24869664_bussines_man_017 1.png";
import GoldCard from "../../Cards/GoldCard/GoldCard";
function GoldSipPage() {
  const data = [
    {
      backgroundColor: "linear-gradient(180deg, #888 8.53%, #000 82.73%)",
    },
    {
      backgroundColor: "linear-gradient(169deg, #888 0.09%, #C59419 47.98%)",
    },
    {
      backgroundColor: "linear-gradient(164deg, #888 8.53%, #5D29CA 80.82%)",
    },
    {
      backgroundColor: "linear-gradient(155deg, #888 0%, #1D599F 60.72%)",
    },
  ];
  return (
    <>
      <UpperNavBar />
      <MainNavBar />
      <div className="goldsippage">
        <div className="goldsippage_breadcrums">
          <Link to="/">Home</Link> / <p>Gold Sip Plan</p>
        </div>
        <div className="goldsippage_banner">
          <img src={img} alt="gold sip banner" />
        </div>
        <div className="goldsippage_details">
          <h3>
            Introducing Gold SIP Plan: Secure Your Future with Precious Metals
          </h3>
          <p>
            Welcome to our exclusive Gold SIP Plan, a revolutionary investment
            opportunity that brings you the stability and growth potential of
            precious metals. Designed to cater to investors of all backgrounds,
            our Gold SIP Plan offers a seamless and systematic approach to
            building wealth and safeguarding your financial future.
          </p>
        </div>
        <div className="goldsippage_whychoosesip">
          <div className="goldsippage_whychoosesip_left">
            <h3>Why Choose Gold SIP?</h3>
            <p className="goldsippage_whychoosesip_left_p">
              The Gold SIP plan is a comprehensive investment tool designed to
              cater to the financial goals and aspirations of individuals
              seeking long-term wealth creation. With its wide array of benefits
              and features, this plan offers a unique opportunity to investors
              seeking stability, security, and growth in their investment
              portfolio.{" "}
            </p>
            <p>
              One of the major advantages of the Gold SIP plan is its systematic
              investment approach. By investing a fixed amount at regular
              intervals, investors can avoid the pitfalls of market timing and
              benefit from the power of rupee cost averaging. This feature
              ensures that investors are protected from the volatility of gold
              prices and can take advantage of both upward and downward
              movements in the market.
            </p>
            <p>
              Additionally, the Gold SIP plan offers investors the flexibility
              and convenience of investing in gold without the hassle of
              physical storage. With the advent of technology, investors can now
              easily invest in gold digitally, eliminating the need for storage
              and security concerns associated with owning physical gold. This
              digital mode of investment not only makes the process hassle-free
              but also provides investors with the convenience of monitoring
              their investment anytime, anywhere.
            </p>
            <p>
              Furthermore, the Gold SIP plan offers investors the opportunity to
              diversify their investment portfolio. Gold, being a globally
              accepted asset, acts as a hedge against inflation and currency
              fluctuations. By including gold in their investment portfolio,
              investors can reduce their overall risk and create a more balanced
              and stable investment approach.
            </p>
            <p>
              In conclusion, the Gold SIP plan is a comprehensive investment
              tool that offers investors a host of benefits, including
              systematic investment through rupee cost averaging, convenience of
              digital investment, and the opportunity of diversification. With
              its unique features, this plan provides a solid foundation for
              long-term wealth creation and financial security in an
              ever-changing market.
            </p>
          </div>
          <div className="goldsippage_whychoosesip_right">
            <img src={img1} alt="banner" />
          </div>
        </div>
        <div className="goldsippage_benefits">
          <h3> BENEFITS</h3>
          <ol>
            <li>
              Diversification: Gold has long been regarded as a safe-haven
              asset, providing stability and acting as a hedge against economic
              uncertainties. By incorporating gold into your investment
              portfolio through our SIP plan, you diversify your holdings and
              reduce overall risk.
            </li>
            <li>
              Inflation Protection: Inflation can erode the purchasing power of
              your money over time. However, gold has historically retained its
              value during inflationary periods, making it an ideal asset to
              counter the effects of rising prices.
            </li>
            <li>
              Accessibility: Our Gold SIP Plan makes investing in precious
              metals accessible to everyone. With affordable monthly
              installments, you can steadily accumulate gold over time,
              regardless of your initial capital.
            </li>
            <li>
              Expert Management: Rest assured that your investments are in
              capable hands. Our team of experienced financial experts will
              carefully manage and monitor your Gold SIP portfolio, making
              timely adjustments to maximize returns.
            </li>
          </ol>
        </div>
        <div className="goldsippage_card">
          {data?.map((item) => (
            <GoldCard bgcolor={item.backgroundColor}/>
          ))}
        </div>
        <div className="goldsippage_how_it_work">
          <h3>How It Works:</h3>
          <ol>
            <li>
              Easy Enrollment: Signing up for our Gold SIP Plan is a breeze.
              Simply visit our website, create an account, and select the plan
              that suits your financial goals.
            </li>
            <li>
              Flexible Investment Options: We offer a range of investment
              options to match your budget and requirements. Choose the monthly
              installment that fits your comfort level and start investing
              immediately.
            </li>
            <li>
              Automatic Buying: Once enrolled, your designated amount will be
              automatically deducted from your bank account each month. Our
              system will then convert that amount into gold at the prevailing
              market rate, ensuring you get the best value for your investment.
            </li>
            <li>
              Secure Storage: Your accumulated gold will be securely stored in
              our state-of-the-art vaults with advanced security measures,
              providing you peace of mind knowing your precious metal holdings
              are safe.
            </li>
            <li>
              Monitor Your Progress: Keep track of your investment's performance
              through our user-friendly dashboard. Real-time updates on your
              gold holdings, market insights, and expert analysis will help you
              make informed decisions.
            </li>
            <li>
              Easy Withdrawals: If you wish to access your gold holdings or
              discontinue the SIP, you can easily do so with minimal hassle.
            </li>
            <li>
              The future is unpredictable, but you can take control of your
              financial destiny by investing in our Gold SIP Plan. Secure your
              wealth with the timeless allure of gold and embark on a path of
              financial growth and stability.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default GoldSipPage;
