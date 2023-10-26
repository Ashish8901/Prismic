"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PersonImage from "../../../public/person-img.png";
const WhoIs = () => {
  return (
    <>
      <section className="whois-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="flex-row items-center ">
                <div className=" hero-content">
                  <div className="text-5xl font-thin mb-4">Who is</div>
                  <h1 className="big-text font-light mb-12">Richard Adebayo</h1>
                  <p className="font-light mb-4 hero-text">
                    Est expedita neque perspiciatis ut vel asperiores minus
                    architecto repellat. Libero consectetur vero recusandae
                    soluta voluptatum ratione quidem. Eum alias et blanditiis
                    itaque error ab consequatur in. Inventore occaecati ullam in
                    nihil epellendus magnam amet dolorem quibusdam.
                  </p>
                </div>
                <div className="hero-img">
                  <Image src={PersonImage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoIs;
