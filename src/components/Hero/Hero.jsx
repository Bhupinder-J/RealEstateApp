import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import "./Hero.css";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings flexCenter innerWidth hero-container">
        {/* LEFT SIDE */}
        <div className="flexColStart hero-left">

          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br />
              Most Suitable
              <br /> Property
            </h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">Find a veriety of properties that suit you very easily</span>
            <span className="secondaryText">Forget all difficulties in finding a residense for you</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" placeholder="" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                {" "}
                <CountUp start={8800} end={9500} duration={4} />
                <span> + </span>
              </span>
              <span className="secondaryText">Prepium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                {" "}
                <CountUp start={1900} end={2000} duration={4} />
                <span> + </span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                {" "}
                <CountUp start={10} end={32} duration={4} />
                <span> + </span>
              </span>
              <span className="secondaryText">Awards</span>
            </div>
          </div>

        </div>
        {/* RIGHT SIDE */}
        <div className="flexCenter hero-right">

          <div className="image-container">
            <img src="./hero-image.png" alt="hero-image"></img>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
