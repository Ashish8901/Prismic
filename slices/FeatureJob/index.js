"use client";

/**
 * @typedef {import("@prismicio/client").Content.FeatureJobSlice} FeatureJobSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeatureJobSlice>} FeatureJobProps
 * @param {FeatureJobProps}
 */
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import PositionSlideOne from "../../public/slide-imge-left.svg";
import PositionSlideTwo from "../../public/slide-img-right.svg";
const FeatureJob = ({ slice }) => {
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
      <section className="blog-setion ">
        <div className="container">
          <div className="trusted-text text-center uppercase mb-1">careers</div>
          <h1 className="big-text font-light mb-12 text-center">
            Featured Job
          </h1>
        </div>
        <div className="container-1920">
          <div className="testimonial-container feature-slider">
            <div className="row jobs-row">
              <div className="position-slide-outer">
                <Image
                  className="position-slide position-slide-left"
                  alt="image"
                  src={PositionSlideOne}
                />
                <Image
                  className="position-slide position-slide-right"
                  alt="image"
                  src={PositionSlideTwo}
                />
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
                <Slider {...settings}>
                  {slice.items.map((elem) => {
                    return (
                      <div className="card-wrapper" key={elem.topfield[0].text}>
                        <div className="card testimo-card">
                          <div className="card-body text-center">
                            <div className="flex justify-center mb-4">
                              <Link className="btn " href="">
                                {elem.topfield[0].text}
                              </Link>
                            </div>
                            <h3 className="text-center">
                              {elem.featureinfo[0].text}
                            </h3>
                            <div>
                              <p className="mb-0 font-light">
                                {elem.country[0].text}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FeatureJob;
