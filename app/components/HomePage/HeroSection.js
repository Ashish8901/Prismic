"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImg from "../../../public/hero-img.svg";
import HeroBg from "../../../public/hero-bg1.svg";
import BtnArow from "../../../public/btn-arrow-icon.svg";
import PlayVideoBtn from "../../../public/play-video-btn.svg";
const HeroSection = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero-section-row">
              <Image className="position-hero-img" alt="" src={HeroBg} />
              <div className="row-flex items-center ">
                <div className=" hero-content">
                  <h1 className="big-text font-light mb-12">
                    The machine to launch rocketssss
                  </h1>
                  <p className="font-medium mb-4 hero-text">
                    Solutions for every type of business and budget
                  </p>
                  <div className="hero-btn">
                    <Link
                      className=" font-bold btn rounded-full bg-white hover:bg-cyan-100 text-black text-base"
                      href="/"
                    >
                      <sapn>Contact Uss</sapn>{" "}
                      <span>
                        <Image alt="" src={BtnArow} />
                      </span>
                    </Link>
                    <Link
                      className="video-btn font-bold btn rounded-full bg-transparent text-black text-base"
                      href="/"
                    >
                      <Image alt="" src={PlayVideoBtn} />
                    </Link>
                  </div>
                </div>
                <div className="hero-img">
                  <Image src={HeroImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
