"use client";

import React from "react";
import Slider from "react-slick";
import Link from "next/link";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="testimonial-section">
        <div className="container">
          <h1 className="big-text font-light mb-0">Testimonials</h1>
          <div className="testimonial-container">
            <div className="row">
              <div className="col-lg-12">
                <Slider {...settings}>
                  <div>
                    <div className="card testimo-card">
                      <div className="card-body">
                        <p className="card-text font-medium">
                          Autem excepturi facere nostrum omnis ex nobis fuga
                          modi. Expedita qui perferendis itaque eligendi minus
                          blanditiis. Dolore eos maiores temporibus cumque vel
                          aut. Aut harum sapiente a aut. Sed consequatur nihil
                          ea enim aut deleniti. Et eaque qui quos recusandae
                          sapiente laborum odit odit.
                        </p>
                        <div className="card-bottom flex justify-between wrap items-center">
                          <div>
                            <h4 className="card-title mb-2 font-light">
                              Daniel Cruise
                            </h4>
                            <p className="mb-0 font-light opacity-50">
                              Chief Program Director
                            </p>
                          </div>
                          <div>
                            <Link className="btn " href="">
                              React Native
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                     <div className="card testimo-card">
                      <div className="card-body">
                        <p className="card-text font-medium">
                          Autem excepturi facere nostrum omnis ex nobis fuga
                          modi. Expedita qui perferendis itaque eligendi minus
                          blanditiis. Dolore eos maiores temporibus cumque vel
                          aut. Aut harum sapiente a aut. Sed consequatur nihil
                          ea enim aut deleniti. Et eaque qui quos recusandae
                          sapiente laborum odit odit.sss
                        </p>
                        <div className="flex justify-between wrap items-center">
                          <div className="mt-2">
                            <h4 className="card-title mb-1 font-light">
                              Daniel Cruise
                            </h4>
                            <p className="mb-0 font-light opacity-50">
                              Chief Program Director
                            </p>
                          </div>
                          <div>
                            <Link className="btn " href="">
                              React Native
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div> 
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
