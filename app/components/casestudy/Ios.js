'use client'
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import StudyCase1 from "../../../public/Studie-Cases-01.svg";
import StudyCase4 from "../../../public/Studie-Cases-04.svg";
import StudyCase5 from "../../../public/Studie-Cases-05.svg";
import StudyCase6 from "../../../public/Studie-Cases-06.svg";
const CasestudySlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    loop: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} className="case-study-tab">
        <div className="card-box">
          <div className="card-box-inner">
            <Image alt="image" className="" src={StudyCase1} />
          </div>
        </div>
        <div className="card-box">
          <div className="card-box-inner">
            <Image alt="image" className="" src={StudyCase4} />
          </div>
        </div>
        <div className="card-box">
          <div className="card-box-inner">
            <Image alt="image" className="" src={StudyCase5} />
          </div>
        </div>
        <div className="card-box">
          <div className="card-box-inner">
            <Image alt="image" className="" src={StudyCase6} />
          </div>
        </div>
        <div className="card-box">
          <div className="card-box-inner">
            <Image alt="image" className="" src={StudyCase1} />
          </div>
        </div>
        <div className="card-box">
          <div className="card-box-inner">
            <Image alt="image" className="" src={StudyCase4} />
          </div>
        </div>
        <div className="card-box">
          <div className="card-box-inner">
            <Image alt="image" className="" src={StudyCase5} />
          </div>
        </div>
        <div className="card-box">
          <div className="card-box-inner">
            <Image alt="image" className="" src={StudyCase6} />
          </div>
        </div>
      </Slider>
    </>
  );
};

export default CasestudySlider;
