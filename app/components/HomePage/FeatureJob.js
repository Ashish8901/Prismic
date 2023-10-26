"use client";

import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import PositionSlideOne from "../../../public/slide-imge-left.svg";
import PositionSlideTwo from "../../../public/slide-img-right.svg";
const FeatureJob = () => {
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
   };
  
  return (
    <>
      <section className="blog-setion pb-5 pt-4">
        <div className="container">
          <div className="trusted-text text-center uppercase mb-1">careers</div>
          <h1 className="big-text font-light mb-12 text-center">
            Featured Jobs
          </h1>
          <div className="testimonial-container feature-slider">
            <div className="row jobs-row">
              <div className="position-slide-outer">
                <Image
                  className="position-slide position-slide-left"
                  alt=""
                  src={PositionSlideOne}
                />
                <Image
                  className="position-slide position-slide-right"
                  alt=""
                  src={PositionSlideTwo}
                />
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
                <Slider {...settings}>
                  <div>
                    <div className="card-wrapper">
                      <div className="card testimo-card">
                        <div className="card-body text-center">
                          <div className="flex justify-center mb-4">
                            <Link className="btn " href="">
                              React Native
                            </Link>
                          </div>
                          <h3 className="text-center">
                            Cloud Network Infrastructure Engineer
                          </h3>
                          <div>
                            <p className="mb-0 font-light">New York</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card-wrapper">
                      <div className="card testimo-card">
                        <div className="card-body text-center">
                          <div className="flex justify-center mb-4">
                            <Link className="btn " href="">
                              React Native
                            </Link>
                          </div>
                          <h3 className="text-center">
                            Cloud Network Infrastructure Engineer
                          </h3>
                          <div>
                            <p className="mb-0 font-light">New York</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
          <div className="hero-btn mt-5 text-center">
            <a
              className="m-auto font-bold justify-center  btn rounded-full bg-white hover:bg-cyan-100 text-black text-base"
              href="/"
            >
              Work with Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureJob;
