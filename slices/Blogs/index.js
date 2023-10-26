"use client";
import Link from "next/link";
/**
 * @typedef {import("@prismicio/client").Content.BlogsSlice} BlogsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogsSlice>} BlogsProps
 * @param {BlogsProps}
 */

import SearchIcon from "../../public/search-icon.svg";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import moment from "moment";
import { useEffect, useState } from "react";
import { createClient } from "@/prismicio";

const Blogs = ({ slice }) => {
  const [homepage, setHomepage] = useState();
  const [filterArray, setFilterArray] = useState([]);
  const [displayCount, setDisplayCount] = useState(3);
  const [searchInput, setSearchInput] = useState("");
  const client = createClient();
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.getSingle("blogdata");
        return setHomepage(data?.data);
      } catch (error) {
        alert("Something went wrong!!!");
        console.log("error=>", error);
      }
    }
    fetchData();
  }, []);
  const fetchblog = (key) => {
    if (!key) {
      setFilterArray(homepage && homepage["wearable"]);
    } else {
      setFilterArray(homepage[key]);
    }
  };

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 3); // Increase the number of items to display by 3
  };
  const remainingItems = filterArray?.length - displayCount;

  const filteredItems = filterArray.filter((item) =>
    item.blogdescription.toLowerCase().includes(searchInput.toLowerCase())
  );
  useEffect(() => {
    homepage && fetchblog();
  }, [homepage]);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className="blog-setion pt-28 pb-28">
        <div className="container">
          <h1 className="big-text font-light mb-12 text-center">Blog</h1>
          <div className="row">
            <div className="col-lg-12">
              <div className=" blog-heading flex justify-between items-center mb-4">
                <h1 className="text-5xl mb-0 font-light">Latest Posts</h1>
                <div>
                  <form action="" className="search-form flex items-center">
                    <button type="submit" className="search-icon">
                      <Image alt="iamge" src={SearchIcon} />
                    </button>
                    <input
                      type="search"
                      placeholder="What are you looking for?"
                      id="gsearch"
                      name="gsearch"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                  </form>
                </div>
              </div>
              <div className="blog-link">
                <ul className="case-study-section flex pl-0 mb-0 gap-3">
                  {homepage &&
                    Object?.keys(homepage).map((item) => {
                      return (
                        <li
                          className="nav-tabs"
                          key={item}
                          onClick={() => {
                            fetchblog(item);
                            setDisplayCount(3);
                          }}
                        >
                          <Link href="" className="nav-link">
                            {item}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="blog-section mt-4">
                <div id="myDIV">
                  {filteredItems.length > 0
                    ? filteredItems
                        ?.slice(0, displayCount)
                        .map((item, index) => (
                          <div className="item" key={index}>
                            <Link href="">
                              <PrismicNextImage
                                fallbackAlt=""
                                field={item.blogimage}
                              />
                              <div className="blog-content mt-4">
                                <h4 className="card-title mb-2 font-light">
                                  {item.blogdescription}
                                </h4>
                                <p className="mb-0 font-light opacity-50">
                                  {moment(item?.blogcreatedate).format("LL")}
                                </p>
                              </div>
                            </Link>
                          </div>
                        ))
                    : "No Matched Blogs Found"}
                </div>
                {remainingItems > 0 ? (
                  <div className="hero-btn mt-5">
                    <button
                      className="w-full font-bold justify-center btn rounded-full bg-white hover:bg-cyan-100 text-black text-base"
                      onClick={handleLoadMore}
                    >
                      Load More
                    </button>
                  </div>
                ) : (
                  <p className="w-full font-bold justify-center btn rounded-full bg-white hover:bg-cyan-100 text-black text-base">
                    No more items to load.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Blogs;
