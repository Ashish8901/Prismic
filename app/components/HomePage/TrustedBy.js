"use client";

import React from "react";
import Image from "next/image";
import TrustedLogo1 from "../../../public/trusted-1.svg";
import TrustedLogo2 from "../../../public/trusted-2.svg";
import TrustedLogo3 from "../../../public/trusted-3.svg";
import TrustedLogo4 from "../../../public/trusted-4.svg";
import TrustedLogo5 from "../../../public/trusted-5.svg";
import TrustedLogo6 from "../../../public/trusted-6.svg";
import TrustedLogo7 from "../../../public/trusted-7.svg";
import TrustedLogo8 from "../../../public/trusted-8.svg";
import TrustedLogo9 from "../../../public/trusted-9.svg";
const TrustedBy = () => {
  return (
    <>
      <section className="trusted-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="trusted-col">
                <div className="trusted-text">TRUSTED BY</div>
                <div className="trusted-logos">
                  <Image alt="" src={TrustedLogo1} />
                  <Image alt="" src={TrustedLogo2} />
                  <Image alt="" src={TrustedLogo3} />
                  <Image alt="" src={TrustedLogo4} />
                  <Image alt="" src={TrustedLogo5} />
                  <Image alt="" src={TrustedLogo6} />
                  <Image alt="" src={TrustedLogo7} />
                  <Image alt="" src={TrustedLogo8} />
                  <Image alt="" src={TrustedLogo9} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedBy;
