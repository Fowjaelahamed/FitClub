import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
const mobile = window.innerWidth <= 768 ? true: false;
  return (
    <div className="hero" id="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile? "155px" :"205px"}}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best Fitness Club in Town</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span><NumberCounter end={140} start={90} preFix="+" delay={4} /></span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={800} preFix="+" delay={4} /></span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={30} preFix="+" delay={4} /></span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        {/* hero button */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      {/* right section */}
      <div className="right-h">
        <button className="btn"><Link to="join" smooth={true} span={true}>Join Now</Link></button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt="hero" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt="hero-back"
          className="hero-image-back"
        />
        {/* calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
