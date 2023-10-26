"use client";
/**
 * @typedef {import("@prismicio/client").Content.CaseStudySlice} CaseStudySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CaseStudySlice>} CaseStudyProps
 * @param {CaseStudyProps}
 */
import { PrismicNextImage } from "@prismicio/next";
import { Tab, Tabs } from "react-bootstrap";
import Slider from "react-slick";
import Ios from "../../app/components/casestudy/Ios";

const CaseStudy = ({ slice }) => {
  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   speed: 500,
  //   rows: 1,
  //   loop: true,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         rows: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className="case-study-section whois-section">
        <div className="container">
          <h1 className="big-text font-light mb-12 text-center">
            Case Studies
          </h1>
        </div>
        <div className="container-1920">
          <div className="row">
            <div className="col-lg-12">
              <Tabs defaultActiveKey="IOS" id="casestudy-tab" className="mb-3">
                <Tab eventKey="IOS" title="IOS">
                  <Ios />
                </Tab>
                <Tab eventKey="android" title="Android">
                  <Ios />
                </Tab>
                <Tab eventKey="React Native" title="React Native">
                  <Ios />
                </Tab>
                <Tab eventKey="wearable" title="Wearable">
                  <Ios />
                </Tab>
                <Tab eventKey="windows" title="Windows">
                  <Ios />
                </Tab>
                <Tab eventKey="saas" title="Saas">
                  Tab content for Saas
                </Tab>
                <Tab eventKey="flutter" title="Flutter">
                  Tab content for Flutter
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="case-study-section whois-section">
        <div className="container">
          <h1 className="big-text font-light mb-12 text-center">
            Case Studies
          </h1>
          <div className="row">
            <div className="col-lg-12">
              <Tabs defaultActiveKey="IOS" id="casestudy-tab" className="mb-3">
                <Tab
                  eventKey="IOS"
                  title="{`${elem.title}`}"
                  // key={elem.title}
                >
                  <Slider {...settings} className="case-study-tab">
                    <div className="card-box">
                      <div className="card-box-inner">
                        <PrismicNextImage alt="" field={elem.image} />
                        <PrismicNextImage alt="" field={elem.imageone} />
                        <PrismicNextImage alt="" field={elem.imagetwo} />
                        <PrismicNextImage alt="" field={elem.imagefour} />
                      </div>
                    </div>
                  </Slider>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section> */}
    </section>
  );
};

export default CaseStudy;
