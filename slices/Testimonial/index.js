"use client";

import Link from "next/link";
import Slider from "react-slick";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialSlice} TestimonialSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialSlice>} TestimonialProps
 * @param {TestimonialProps}
 */
const Testimonial = ({ slice }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className="testimonial-section">
        <div className="container">
          <h1 className="big-text font-light mb-0">Testimonials</h1>
        </div>
        <div className="container-1920">
          <div className="testimonial-container">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <Slider {...settings}>
                    {slice.items.map((item) => {
                      return (
                        <div key={item.description[0].text}>
                          <div className="card testimo-card">
                            <div className="card-body">
                              <p className="card-text font-medium">
                                {item.description[0].text}
                              </p>
                              <div className="card-bottom flex justify-between wrap items-center">
                                <div>
                                  <h4 className="card-title mb-2 font-light">
                                    {item.name[0].text}
                                  </h4>
                                  <p className="mb-0 font-light opacity-50">
                                    {item.test[0].text}
                                  </p>
                                </div>
                                <div>
                                  <Link className="btn " href="">
                                    {item.technology}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonial;
