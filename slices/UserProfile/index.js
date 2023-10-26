"use client";
/**
 * @typedef {import("@prismicio/client").Content.UserProfileSlice} UserProfileSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<UserProfileSlice>} UserProfileProps
 * @param {UserProfileProps}
 */
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
const UserProfile = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className="whois-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="flex-row items-center ">
                <div className=" hero-content">
                  <div className="text-5xl font-thin mb-4">
                    <PrismicRichText field={slice.primary.textfieldname} />
                  </div>
                  <h1 className="big-text font-light mb-12">
                    {slice.primary.userfield[0].text}
                  </h1>
                  <p className="font-light mb-4 hero-text">
                    {slice.primary.userinfo[0].text}
                  </p>
                </div>
                <div className="hero-img">
                  <PrismicNextImage
                    field={slice.primary.profilepick}
                    fallbackAlt=""
                  ></PrismicNextImage>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default UserProfile;
