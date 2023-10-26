"use client";
import React from "react";
// import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import ServiceBg from "../../../public/service-bg.svg";
import ArrowWhite from "../../../public/arrow-white.svg";
const OurServices = () => {
  return (
    <>
      <section className="pt-8">
        <div className="container">
          <div className="service-text text-light">
            <span className="text-shadow ">Our</span> Services
          </div>
          <div className="row">
            <div className="col-lg-12 relative -top-16 mob-position">
              <ScrollContainer className="plugin-scroll" hideScrollbars={true}>
                <div className="card card-service">
                  <div className="card-front ">
                    <h3 className="font-light">Web Solutions</h3>
                  </div>
                  <div className="card-back ">
                    <Image alt="" src={ServiceBg} />
                    <div className="card-content-bg">
                      <ul className="case-study-section flex pl-0 mb-0 gap-3">
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            IOS
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Android
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            React Native
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Wearable
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Wearable
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Windows
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Saas
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Flutter
                          </Link>
                        </li>
                      </ul>

                      <div className="flex justify-between bg-btm-text mt-3">
                        <h3 className="font-light text-5xl mb-0">
                          Web Solutions
                        </h3>
                        <Link href="/">
                          <Image src={ArrowWhite} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-service active-card">
                  <div className="card-front ">
                    <h3 className="font-light">Web Development</h3>
                  </div>
                  <div className="card-back ">
                    <Image alt="" src={ServiceBg} />
                    <div className="card-content-bg">
                      <ul className="case-study-section flex pl-0 mb-0 gap-3">
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            IOS
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Android
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            React Native
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Wearable
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Wearable
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Windows
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Saas
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Flutter
                          </Link>
                        </li>
                      </ul>

                      <div className="flex justify-between bg-btm-text mt-3">
                        <h3 className="font-light text-5xl mb-0">
                          Web Development
                        </h3>
                        <Link href="/">
                          <Image src={ArrowWhite} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-service">
                  <div className="card-front ">
                    <h3 className="font-light">Web Development</h3>
                  </div>
                  <div className="card-back ">
                    <Image alt="" src={ServiceBg} />
                    <div className="card-content-bg">
                      <ul className="case-study-section flex pl-0 mb-0 gap-3">
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            IOS
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Android
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            React Native
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Wearable
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Wearable
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Windows
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Saas
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Flutter
                          </Link>
                        </li>
                      </ul>

                      <div className="flex justify-between bg-btm-text mt-3">
                        <h3 className="font-light text-5xl mb-0">
                          Web Development
                        </h3>
                        <Link href="/">
                          <Image src={ArrowWhite} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-service">
                  <div className="card-front ">
                    <h3 className="font-light">
                      Digital Transformation Development
                    </h3>
                  </div>
                  <div className="card-back ">
                    <Image alt="" src={ServiceBg} />
                    <div className="card-content-bg">
                      <ul className="case-study-section flex pl-0 mb-0 gap-3">
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            IOS
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Android
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            React Native
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Wearable
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Wearable
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Windows
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Saas
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Flutter
                          </Link>
                        </li>
                      </ul>

                      <div className="flex justify-between bg-btm-text mt-3">
                        <h3 className="font-light text-5xl mb-0">
                          Digital Transformation Development
                        </h3>
                        <Link href="/">
                          <Image src={ArrowWhite} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-service">
                  <div className="card-front ">
                    <h3 className="font-light">Web Development</h3>
                  </div>
                  <div className="card-back ">
                    <Image alt="" src={ServiceBg} />
                    <div className="card-content-bg">
                      <ul className="case-study-section flex pl-0 mb-0 gap-3">
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            IOS
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Android
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            React Native
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Wearable
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Wearable
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Windows
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Saas
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Flutter
                          </Link>
                        </li>
                      </ul>

                      <div className="flex justify-between bg-btm-text mt-3">
                        <h3 className="font-light text-5xl mb-0">
                          Web Development
                        </h3>
                        <Link href="/">
                          <Image src={ArrowWhite} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollContainer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
