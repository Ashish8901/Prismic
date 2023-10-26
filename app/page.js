"use client";
import React from "react";
import Image from "next/image";
import PositionBg1 from "../public/position-bg-1.svg";
import PositionBg2 from "../public/position-bg-2.svg";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
const page = async () => {
  const client = createClient();
  const page = await client.getSingle("homepage");
  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
      <div className="bg-bubble">
        <div className="position-bg-img">
          <Image
            className="position-bg position-bg-img-one"
            alt="image"
            src={PositionBg1}
          />
          <Image
            className="position-bg position-bg-img-two"
            alt="image"
            src={PositionBg2}
          />
        </div>
      </div>
    </>
  );
};

export default page;
