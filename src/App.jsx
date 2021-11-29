import React, { useEffect } from "react";
import "./App.css";
import { FaDiscord, FaTwitterSquare } from "react-icons/fa";
import { MdArrowUpward, MdMenu, MdClose } from "react-icons/md";
import Specie1 from "./assets/Specie1.png";
import Specie2 from "./assets/Specie2.png";
import Specie3 from "./assets/Specie3.png";
import Specie4 from "./assets/Specie4.png";
import Specie5 from "./assets/Specie5.png";
import Specie6 from "./assets/Specie6.jpg";
import Specie7 from "./assets/Specie7.png";
import Specie8 from "./assets/Specie8.png";
import Specie9 from "./assets/Specie9.png";
import Story1 from "./assets/Story1.png";
import Story2 from "./assets/Story2.png";
import Story3 from "./assets/Story3.png";
import DAO1 from "./assets/DAO1.png";
import DAO2 from "./assets/DAO2.png";
import DAO3 from "./assets/DAO3.png";
import Story4 from "./assets/Story4.png";
import Story5 from "./assets/Story5.png";
import Story6 from "./assets/Story6.png";
import Story7 from "./assets/Story7.png";
import Story8 from "./assets/Story8.png";
import Story9 from "./assets/Story9.png";
import Specie10 from "./assets/Specie10.png";
import Icon1 from "./assets/icon1.svg";
import Icon3 from "./assets/icon3.svg";
import Space from "./assets/black.jpg";
import HeroBanner from "./assets/hero-banner.jpg";
import Logo from "./assets/logo.png";

import { Power4, Linear } from "gsap/dist/gsap";
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
  /* Desktop Anchors */
  const moveToHome = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#sectionHome",
        offsetY: 65,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo1 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section1",
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo2 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section2",
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo3 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section3",
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo4 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section4",
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo5 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section5",
      },
      ease: Power4.easeInOut,
    });
  };
  /* Mobile Anchors */
  const moveToHomeMob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#sectionHome",
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
  const moveTo1Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section1",
        offsetY: 35,
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
        offsetY: 35,
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
        offsetY: 35,
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
        offsetY: 35,
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
        offsetY: 35,
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
  /* Move To Top Button */
  const handleToTop = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#sectionHome",
      },
      ease: Power4.easeInOut,
    });
  };
  /* Mobile Header Visibility */
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
    <div className="space">
      {/* <img src={HeroBanner} alt="" className="space-bg" /> */}
      {/* MoveToTop Button */}
      <span className="moveToTop" onClick={handleToTop}>
        <MdArrowUpward />
      </span>

      {/* Header */}
      <div className="header">
        <div className="box">
          <div className="header-content">
            {/* <h1 onClick={moveTo1} className="cursive">
              FuturePunkz DAO
            </h1> */}
            <img onClick={moveTo1} src={Logo} alt="" />
            <div className="header-pc">
              <a onClick={moveToHome} className="mt mtHome">
                Home
              </a>
              <a onClick={moveTo1} className="mt mt2">
                Mint
              </a>
              <a onClick={moveTo2} className="mt mt3">
                Story
              </a>
              <a onClick={moveTo3} className="mt mt4">
                DAO Battle
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
                <a onClick={moveToHomeMob} className="mt mtHome">
                  Home
                </a>
                <a onClick={moveTo1Mob} className="mt mt2">
                  Mint
                </a>
                <a onClick={moveTo2Mob} className="mt mt3">
                  Story
                </a>
                <a onClick={moveTo3Mob} className="mt mt4">
                  DAO Battle
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

      {/* Hero Banner */}
      <img id="sectionHome" src={HeroBanner} className="hero-banner" alt="" />
      {/* Hero Section */}
      <div className="hero section " id="section1">
        <div className="box">
          <div className="hero-content">
            <h1 className="mainHeading">Future Punkz Genesis</h1>
            <h2>
              4444 randomly generated NFTs on the Ethereum Blockchain. The
              holders gain access to DAO votes, the DAO game, and future drops.
              Mint yours.
            </h2>
            <img src={Specie1} alt="" />
            <h3>Mint price: 0.03 ETH + Gas</h3>
            <button className="button">MINT NOW</button>
            <h4 id="timer"></h4>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="about section" id="section2">
        <div className="box">
          <h2 className="mainHeading">STORY</h2>
          <div className="story-grid">
            <div className="story-grid-left">
              <main>
                <img src={Story1} alt="" />
                <img src={Story8} alt="" />
                <img src={Story9} alt="" />
                <img src={Story7} alt="" />
                <img src={Story3} alt="" />
                <img src={Story5} alt="" />
                <img src={Story2} alt="" />
                <img src={Story4} alt="" />
                <img src={Story6} alt="" />
              </main>
            </div>
            <div className="story-grid-right">
              {/* <h1 className="nebula">THE STORY</h1> */}
              <h1 className="nebula">Battle for Utopia</h1>
              <p>
                In the mountains of Nepal, a cave was discovered, holding the
                story of 4 legendary Monkz…
                <br />
                It is said that they were so wise, they created a decentralized
                city of financial freedom and abundance called Utopia. In
                Utopia, people lived in harmony with their finances,
                decentralized from authority.
                <br />
                The true history of the Monkz has long been forgotten, but
                legends and rumors of a portal that leads to their world have
                been part of many cultures’ lore for thousands of years. Some
                call it the vault of time, the valley of forever, or just the
                Eternal.
                <br />
                Every time the portal opens, a war breaks out between the
                world’s most powerful tribes to claim the right to enter the
                lost valley and gain access to the secret riches of Utopia.
                <br />
                In the year 4444, the portal opened and war broke out once
                again.
                <br />
                Two great factions rose, The Psychic Punkz and the Alchemist
                Punkz. Which faction will win out and make it to the city of
                Utopia in the Monkz metaverse?
                <br />
                Psychic Punkz possess the power of seeing the short-term future
                and therefore are excellent at fast decisions. They take high
                risks and earn high rewards.
                <br />
                Alchemist Punkz rely on their experience and knowledge and
                therefore can calculate what projects will prevail long-term.
                With the power of patience and conviction, they accumulate
                slowly, but steadily, over time.
              </p>
              {/* <h1 className="nebula">CHOOSE YOUR TRIBE</h1>
              <p>
                Future Punkz Genesis is a collection of 4444 NFTs on the
                Ethereum Blockchain. The holders gain access to DAO votes, the
                DAO game, and future drops.
                <br />
                <br />
                The first DAO battle of its kind.
                <br />
                <br />
                An experiment to find out which investment strategy is the best
                in the fast-moving NFT market. A friendly competition to create
                the most value for our community.
              </p> */}
            </div>
          </div>
        </div>
      </div>

      {/* DAO Battle Section */}
      <div className="species section" id="section3">
        <div className="box">
          <h2 className="mainHeading">THE DAO GAME</h2>
          <div className="dao-battle">
            <h1 className="nebula">Psychics vs Alchemists </h1>
            <h2>
              Get ready for the Future Battle! The first Dao game of its kind.
              <br />
              Depending on which of these NFTs you hold, you receive access to
              different areas of the game and different VP (voting power)
            </h2>
            <div className="dao-grid">
              <div className="dao-grid-cell">
                <img src={DAO3} alt="" />
                <h3>PSYCHIC PUNK</h3>
                <ul>
                  <li>- VP for short term flips</li>
                  <li>- VP for planet proposals</li>
                  <li>- Whitelist pass for V2</li>
                  <li>- Access to Utopia metaverse</li>
                  <li>- Supply: 2195</li>
                </ul>
              </div>
              <div className="dao-grid-cell">
                <img src={DAO1} alt="" />
                <h3>ALCHEMIST PUNK</h3>
                <ul>
                  <li>- VP for long term holds</li>
                  <li>- VP for planet proposals</li>
                  <li>- Whitelist pass for V2</li>
                  <li>- Access to Utopia metaverse</li>
                  <li>- Supply: 2195</li>
                </ul>
              </div>
              <div className="dao-grid-cell">
                <img src={DAO2} alt="" />
                <h3>LEGENDARY MONK</h3>
                <ul>
                  <li>- VP over any side</li>
                  <li>- VP for planet proposals</li>
                  <li>- Free mintpass for V2</li>
                  <li>- Access to Utopia metaverse</li>
                  <li>- more special perks</li>
                  <li>- Supply: 56</li>
                </ul>
              </div>
            </div>
            <h2>Psychic- and Alchemist Punkz each have their own wallet. </h2>
            <h2>Legendary Monkz can choose on which site they stand.</h2>
            <h2>The V2 collection will be added to the game later on. </h2>
            <br />
            <br />
            <p>
              Q4 2022 we will compare which strategy was more successful.
              <br />
              The winner gets to decide what happens next with the combined
              funds.
              <br />
              This is a unique game and an experiment.
              <br />
              You can buy bluechips, big projects, small projects, crypto
              currencies and/or meta verse land.
            </p>
            <br />
            <br />
           <h2>Let the battle begin! </h2>
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
                <p>➥ Thats 42% of all mint funds</p>
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
                <p>
                  ➥ <b>25%</b> goes to development and staff.
                </p>
                <p>
                  ➥ Tokenomics for <b>$JUICE</b> will be decided by the
                  community.
                </p>
                <p>
                  ➥ FuturePunkz Nft can be staked to earn <b>$JUICE.</b>
                </p>
              </div>
              <main></main>
            </div>
            <div className="roadmap-options">
              <div className="roadmap-options-ceiling"></div>
              <div className="roadmap-options-container">
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">BAYC? </div>
                </div>
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">Breeding?</div>
                </div>
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">Fruit Project?</div>
                </div>
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">Your ideas</div>
                </div>
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">Merch?</div>
                </div>
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">Event? </div>
                </div>
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">Donation?</div>
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
              We have many possibilities and ideas from here. But its essential
              to a Dao that the community votes on which roads we take with the
              project. When phase 1 is completed we will introduce a few options
              for phase 2.
            </p>
            <br />
            <p>
              We recommend to hold at least 2 Future Punkz of 2 different
              species until that point. Future Punkz Dao is a circle inside of a
              system of multiple circles. We are excited to share the process
              with you and can’t wait to build a longterm utility for our
              members.{" "}
            </p>
            <br />
            <p>FuturePunkz DAO = Key</p>
            <p>Door coming soon. Hold.</p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="team section" id="section5">
        <div className="box">
          <div className="mainHeading">Team</div>
          <div className="team-content">
            <div className="team-box">
              <a href="https://twitter.com/NuMaSaCa1">
                <img src={Icon3} alt="" />
              </a>
              <img src={Specie1} alt="" />
              <main>
                <h6>Numa Saca</h6>
                <h5>Founder </h5>
                <h5>Community manager </h5>
              </main>
            </div>
            <div className="team-box">
              <a href="https://twitter.com/Solo2313137943">
                <img src={Icon3} alt="" />
              </a>
              <img src={Specie7} alt="" />
              <main>
                <h6>Solo Monk</h6>
                <h5>Founder </h5>
                <h5>Creative director</h5>
              </main>
            </div>
            <div className="team-box">
              <a href="https://twitter.com/HbHbHb83658985">
                <img src={Icon3} alt="" />
              </a>
              <img src={Specie6} alt="" />
              <main>
                <h6>Huzaifa</h6>
                <h5>Artist</h5>
              </main>
            </div>
            <div className="team-box">
              {/* <a href="#">
                <img src={Icon3} alt="" />
              </a> */}
              <img src={Specie3} alt="" />
              <main>
                <h6>69Hunter </h6>
                <h5>Developer </h5>
              </main>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-parent">
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
    </div>
  );
}

export default App;
