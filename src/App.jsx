import React, { useEffect } from "react";
import "./App.css";
import { FaDiscord, FaTwitterSquare } from "react-icons/fa";
import { MdArrowUpward, MdMenu, MdClose } from "react-icons/md";
import A1 from "./assets/1.png";
import A2 from "./assets/2.png";
import A3 from "./assets/2.png";
import A4 from "./assets/1.png";
import Icon1 from "./assets/icon1.svg";
import Icon2 from "./assets/icon2.svg";
import Icon3 from "./assets/icon3.svg";

import { Power4 } from "gsap/dist/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import $ from "jquery";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    /* Scroll-to-Top button visibility control */
    gsap.fromTo(
      ".moveToTop",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#section1",
          toggleActions: "play pause resume none",
          start: "bottom 0%",
          scrub: true,
        },
      }
    );
  }, []);
  const moveTo1 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section1",
        offsetY: 65,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo2 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section2",
        offsetY: 35,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo3 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section3",
        offsetY: 35,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo4 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section4",
        offsetY: 35,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo5 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section5",
        offsetY: 35,
      },
      ease: Power4.easeInOut,
    });
  };
  /* Mobile Anchors */
  const moveTo1Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section1",
        offsetY: 65,
      },
      ease: Power4.easeInOut,
    });
    $(".header-mob").slideUp(500);
    $(".close").css({
      display: "none",
    });
    $(".burger").css({
      display: "flex",
    });
  };
  const moveTo2Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section2",
        offsetY: 65,
      },
      ease: Power4.easeInOut,
    });
    $(".header-mob").slideUp(500);
    $(".close").css({
      display: "none",
    });
    $(".burger").css({
      display: "flex",
    });
  };
  const moveTo3Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section3",
        offsetY: 65,
      },
      ease: Power4.easeInOut,
    });
    $(".header-mob").slideUp(500);
    $(".close").css({
      display: "none",
    });
    $(".burger").css({
      display: "flex",
    });
  };
  const moveTo4Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section4",
        offsetY: 65,
      },
      ease: Power4.easeInOut,
    });
    $(".header-mob").slideUp(500);
    $(".close").css({
      display: "none",
    });
    $(".burger").css({
      display: "flex",
    });
  };
  const moveTo5Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section5",
        offsetY: 65,
      },
      ease: Power4.easeInOut,
    });
    $(".header-mob").slideUp(500);
    $(".close").css({
      display: "none",
    });
    $(".burger").css({
      display: "flex",
    });
  };

  const handleToTop = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section1",
        offsetY: 65,
      },
      ease: Power4.easeInOut,
    });
  };
  const showMobHeader = () => {
    $(".header-mob").slideDown(500);
    $(".close").css({
      display: "flex",
    });
    $(".burger").css({
      display: "none",
    });
  };
  const hideMobHeader = () => {
    $(".header-mob").slideUp(500);
    $(".close").css({
      display: "none",
    });
    $(".burger").css({
      display: "flex",
    });
  };
  return (
    <div className="App">
      {/* MoveToTop Button */}
      <span className="moveToTop" onClick={handleToTop}>
        <MdArrowUpward />
      </span>

      {/* Header */}
      <div className="header">
        <div className="box">
          <div className="header-content">
            <h1 onClick={moveTo1} className="cursive">
              FuturePunkz DAO
            </h1>
            <div className="header-pc">
              <a onClick={moveTo1} className="mt mt2">
                Mint
              </a>
              <a onClick={moveTo2} className="mt mt3">
                About
              </a>
              <a onClick={moveTo3} className="mt mt4">
                Species
              </a>
              <a onClick={moveTo4} className="mt mt5">
                Roadmap
              </a>
              <a onClick={moveTo5} className="mt mt5">
                Team
              </a>
            </div>

            <MdMenu className="burger" onClick={showMobHeader} />
            <MdClose className="close" onClick={hideMobHeader} />
            <div className="header-mob">
              <main>
                <a onClick={moveTo1Mob} className="mt mt2">
                  Mint
                </a>
                <a onClick={moveTo2Mob} className="mt mt3">
                  About
                </a>
                <a onClick={moveTo3Mob} className="mt mt4">
                  Species
                </a>
                <a onClick={moveTo4Mob} className="mt mt5">
                  Roadmap
                </a>
                <a onClick={moveTo5Mob} className="mt mt5">
                  Team
                </a>
              </main>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero section" id="section1">
        <div className="box">
          <div className="hero-content">
            <div className="hc-left">
              <h3 className="cursive">
                Coming Soon <span id="timer"></span>
              </h3>
              <h1 className="cursive">
                FuturePunkz <span className="cursive">DAO</span>
              </h1>
              <p>
                10.000 unique and randomly generated Future Punkz came together
                to save the future of humanity and sip $JUICE in UTOPIA.
              </p>
              <button className="button">Mint Your Own!</button>
              <main>
                <a href="">
                  <img src={Icon1} alt="" />
                </a>
                <a href="">
                  <img src={Icon2} alt="" />
                </a>
                <a href="">
                  <img src={Icon3} alt="" />
                </a>
              </main>
            </div>
            <div className="hc-right">
              <main>
                <img src={A1} alt="" />
                <img src={A2} alt="" />
                <img src={A3} alt="" />
                <img src={A4} alt="" />
              </main>
            </div>
          </div>
        </div>
      </div>

      {/* Facts Section */}
      <div className="about section" id="section2">
        <div className="box">
          <h2 className="mainHeading">Facts</h2>
          <div className="about-content">
            <p>
              Future Punkz DAO is a NFT project with multiple utilities. One of
              them is the purchase and fractionalization of blue chip NFTs. The
              holders will be granted access to the exclusive community and
              receive voting rights over the DAO’s asset.
            </p>
            <br />
            <p>
              $JUICE token represents a fractional share of the master NFT
              vault. Every staked FuturePunk will receive a certain amount of
              $JUICE a day. $JUICE is a strictly utility token in the Future
              Punkz ecosystem. The value of this token is: 1 $JUICE = 1 $JUICE.
            </p>
            <br />
            <p>
              Future Punkz NFT also acts as a whitelist pass for upcoming drops
              so make sure you always hold at least one. More future utility
              will be announced after phase 2 of our Roadmap.
            </p>
            <br />
            <p>
              <b>42%</b> of the initial mint revenue will be dedicated to the
              community wallet controlled by the DAO. Additionally, we are
              dedicating <b>7.5%</b> of open sea royalties to the community
              wallet and <b>2.5%</b> to development and staff.
            </p>
          </div>
        </div>
      </div>

      {/* Species Section */}
      <div className="species section" id="section3">
        <div className="box">
          <h2 className="mainHeading">Species</h2>
          <div className="species-content">
            <div className="species-box">
              <img src={A1} alt="" />
              <h3 className="">Species Name</h3>
            </div>
            <div className="species-box">
              <img src={A2} alt="" />
              <h3 className="">Species Name</h3>
            </div>
            <div className="species-box">
              <img src={A1} alt="" />
              <h3 className="">Species Name</h3>
            </div>
            <div className="species-box">
              <img src={A2} alt="" />
              <h3 className="">Species Name</h3>
            </div>
            <div className="species-box">
              <img src={A1} alt="" />
              <h3 className="">Species Name</h3>
            </div>
            <div className="species-box">
              <img src={A2} alt="" />
              <h3 className="">Species Name</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="roadmap section" id="section4">
        <div className="box">
          <h2 className="mainHeading">Roadmap</h2>
          <h5 className="mainSubHeading">
            First stop moon. Second stop jupiter. Third stop UTOPIA!
          </h5>
          <div className="roadmap-content">
            <div className="roadmap-container">
              <div className="roadmap-box">
                <h4>Before mintstage</h4>
                <p>➥ Open up discord server.</p>
                <p>➥ Future Punkz giveaways on twitter.</p>
                <p>➥ Collect whitelist spots.</p>
              </div>
              <main></main>
            </div>
            <div className="roadmap-container">
              <div className="roadmap-box">
                <h4>During mintstage</h4>
                <p>➥ Setting up of vault in fractional.art.</p>
                <p>➥ First snapshot vote for NFT purchase.</p>
                <p>➥ Staking preparation</p>
              </div>
              <main></main>
            </div>
            <div className="roadmap-container">
              <div className="roadmap-box">
                <h4>After 100% sellout</h4>
                <p>➥ Add 100 Ethereum to the DAO wallet</p>
                <p>➥ Thats 25% of all mint funds</p>
                <p>➥ Make our first Bluechip NFT purchase </p>
                <p>➥ Start implementing staking. </p>
              </div>
              <main></main>
            </div>
            <div className="roadmap-container">
              <div className="roadmap-box">
                <h4>Secondary Sale</h4>
                <p>
                ➥ <b>75%</b> of open sea royalties to the community wallet
                </p>
                <p>➥ <b>25%</b> goes to development and staff.</p>
                <p>➥ Tokenomics for <b>$JUICE</b> will be decided by the community.</p>
                <p>➥ FuturePunkz Nft can be staked to earn <b>$JUICE.</b></p>
              </div>
              <main></main>
            </div>
            <div className="roadmap-options">
              <div className="roadmap-options-ceiling"></div>
              <div className="roadmap-options-container">
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">OPTION 1</div>
                </div>
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">OPTION 2</div>
                </div>
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">OPTION 3</div>
                </div>
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">OPTION 4</div>
                </div>
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">OPTION 5</div>
                </div>
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">OPTION 5</div>
                </div>
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">OPTION 5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about2 section">
        <div className="box">
          <div className="about-content">
            <p>
              Where do we go from here? We have so many ideas and possibilities
              and as a Dao we want to decide together with the community which
              roads we take.
            </p>
            <br />
            <p>A few things are for sure:</p>
            <p>
              We enjoy providing our members with value on top of value. We
              believe in a future of unity, financial freedom, creativity and
              love. Every part of our team is contributing his/her unique
              superpower to turn our vision to reality. Be part of the tribe,
              hold strong, be yourself and soon we gonna sip $JUICE in UTOPIA.
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="team section" id="section5">
        <div className="box">
          <div className="mainHeading">Team</div>
          <div className="team-content">
            <div className="team-box">
              <a href="#">
                <img src={Icon3} alt="" />
              </a>
              <img src={A1} alt="" />
              <h6>Lorem, ipsum do culpa!</h6>
            </div>
            <div className="team-box">
              <a href="#">
                <img src={Icon3} alt="" />
              </a>
              <img src={A1} alt="" />
              <h6>Lorem, ipsum do culpa!</h6>
            </div>
            <div className="team-box">
              <a href="#">
                <img src={Icon3} alt="" />
              </a>
              <img src={A1} alt="" />
              <h6>Lorem, ipsum do culpa!</h6>
            </div>
            <div className="team-box">
              <a href="#">
                <img src={Icon3} alt="" />
              </a>
              <img src={A1} alt="" />
              <h6>Lorem, ipsum do culpa!</h6>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="box">
        <div className="footer">
          {/*  <span>
            <FaDiscord />
            <FaTwitterSquare />
          </span> */}
          <p>Copyright © 2021 FuturePunkz DAO. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
