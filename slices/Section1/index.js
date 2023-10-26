"use client";
/**
 * @typedef {import("@prismicio/client").Content.Section1Slice} Section1Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<Section1Slice>} Section1Props
 * @param {Section1Props}
 */
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroBg from "../../public/hero-bg1.svg";
import BtnArow from "../../public/btn-arrow-icon.svg";
import PlayVideoBtn from "../../public/play-video-btn.svg";
import { PrismicNextImage } from "@prismicio/next";

const Section1 = ({ slice }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {" "}
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="container-1920">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-section-row">
                <Image className="position-hero-img" alt="image" src={HeroBg} />
                <div className="row-flex items-center ">
                  <div className=" hero-content">
                    <h1 className="big-text font-light mb-12">
                      {slice.primary.textfield[0].text}
                    </h1>
                    <p className="font-medium mb-4 hero-text">
                      {slice.primary.budgetfield[0].text}
                    </p>
                    <div className="hero-btn">
                      <Link
                        className=" font-bold btn rounded-full bg-white hover:bg-cyan-100 text-black text-base"
                        href="#contact-us"
                      >
                        <sapn>Contact Us</sapn>{" "}
                        <span>
                          <Image alt="image" src={BtnArow} />
                        </span>
                      </Link>
                      <button
                        className="video-btn font-bold btn rounded-full bg-transparent text-black text-base"
                        onClick={handleShow}
                      >
                        <Image alt="image" src={PlayVideoBtn} />
                      </button>
                    </div>
                  </div>
                  <div className="hero-img">
                    <PrismicNextImage
                      fallbackAlt=""
                      field={slice.primary.section1image}
                    ></PrismicNextImage>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal className="video-player" show={show} onHide={handleClose}>
        <div>
          <button className="close-icon" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </svg>
          </button>
          <ReactPlayer
            className="player-div"
            url={`${slice.primary.video.url}`}
          />
        </div>
      </Modal>
    </>
  );
};

export default Section1;
